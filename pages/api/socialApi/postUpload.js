import axios from "axios";
import FormData from "form-data";
import formidable from "formidable";
import fs from "fs";
import withSession from "../../../utils/session";

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const handler = async (req, res) => {
  // const { user: { at = "" } = {}, loggedIn } = req.session;
  const { body } = req;
  // console.log("body here", body);
  const form = new formidable.IncomingForm();
  // console.log("form :>> ", form);

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error uploading file" });
      return;
    }
    const formData = new FormData();
    // console.log("fields :>> ", fields);
    console.log("files :>> ", files);
    const file = files["profile_pic_file"];
    const mimeType = file.mimetype;
    const id = fields.id;
     console.log(" hello files.mimetype :>> ", file.filepath);
    console.log("hello mimeType :>> ", mimeType);
    console.log("hello id :>> ", id);

    // const readStream = fs.createReadStream(file.path);

    // this works with nodejs 18 version
    // const fileData = fs.readFileSync(file.filepath);
    // const blobFile = new Blob([fileData], { type: mimeType });
    // console.log('hello file here', blobFile);
    // formData.append('type', fields.type);
    // formData.append(`prescription_image[]`, blobFile, file.originalFilename);

    formData.append("profile_pic_file", fs.createReadStream(file.filepath), {
      filename: file.originalFilename,
      contentType: file.mimeType,
    });

    console.log("FormData:", formData);

    axios
      .post(
        `${process.env.BASE_SERVICE_URL}/story/new/${id}`,
        formData,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${at}`,
            ...formData.getHeaders(),
          },
          data : formData
        }
      )

      .then((response) => {
        // console.log(response, "res here");
        res.status(200).json(response.data);
      })
      .catch((err) => {
        console.log(
          "error caught in -> pages/api/socialApi/postupload",
          err
        );
        if (err?.response) {
          const { status = {} } = err?.response;
          res.status(status).json(err.response.data);
        } else res.status(500).json({ message: "something went wrong" });
        Promise.reject(err);
      });
  });
};

export default withSession(handler);
