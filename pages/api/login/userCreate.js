import { authServer } from "../../../utils/axios";
import withSession from "../../../utils/session";

function handler(req, res) {
  // return new Promise((resolve, reject) => {
  const { user: { at = "" } = {}, loggedIn } = req.session;

  const body = req.body;

  const config = {
    method: "post",
    url: "/auth/user",
    headers: {
      Authorization: `Bearer ${at}`,
    },
    data: body,
  };

  authServer(config)
    .then((response) => {
      // console.log("hello BRAND",response)
      if (response.status === 200) {
        res.status(200).json(response.data);
        Promise.resolve();
      }
    })
    .catch((err) => {
      console.log("error caught in -> api/login/userCreate", err);
      // console.log(err.response);
      if (err?.response) {
        const { status = {} } = err?.response;
        res.status(status).json(err.response.data);
      } else res.status(500).json({ message: "something went wrong" });
      Promise.reject(err);
    });
  // }
  // )
}

export default withSession(handler);
