import { baseServer } from "../../../utils/axios";
// import withSession from "../../../utils/session";

async function handler(req, res) {
 // return new Promise((resolve, reject) => {
 
  const body = req.body;
console.log(body,"bbbbbb")
  const config = {
    method: "post",
    url: "/user/new",
    data: body,
  };
  baseServer(config)
    .then(async (response) => {

      if ( response?.data?.success) {
     
        // console.log("hello 1")

        res.status(200).json(response.data);

        // console.log("hello 3")

        Promise.resolve();
      }
      // console.log("hello 4")
    })
    .catch((err) => {
      console.log("error caught in -> api/login/userSignup", err);
      // console.log("rrrrrrrrrrrrrrrr",err.response.data);
      if (err?.response) {
        const { status = {} } = err?.response;
        res.status(status).json(err?.response?.data);
      } else res.status(500).json({ message: "something went wrong" });
      Promise.reject(err);
    });

  // }
  // )
}


 export default handler;

