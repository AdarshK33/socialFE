import { baseServer } from "../../../utils/axios";
import withSession from "../../../utils/session";

async function handler(req, res) {
 // return new Promise((resolve, reject) => {
  const { user: { at = "" } = {}, loggedIn } = req.session;

  const body = req.body;
console.log(body,"bbbbbb")
  const config = {
    method: "post",
    url: "/auth/login",
    data: body,
  };
  baseServer(config)
    .then(async (response) => {
      console.log("hello login response", response?.data);
      if ( response?.data?.success) {
        req.session = {
          ...req.session,
          user: {
            ...response.data.user, //user detaisl and token
          },
          loggedIn: true,
        };
        // console.log("hello 1")

        await req.session.save();
        // console.log("hello 2")
        res.status(200).json(response.data);

        // console.log("hello 3")

        Promise.resolve();
      }
      // console.log("hello 4")
    })
    .catch((err) => {
      console.log("error caught in -> api/login/userLogin", err);
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

 export default withSession(handler);
// export default handler;

