import { baseServer } from "../../../utils/axios";
import withSession from "../../../utils/session";

function handler(req, res) {
 
  const { user: {token = "" } = {}, loggedIn } = req.session;

  const body = req.body;
  const id = body.userid
  console.log("iiiiiiiiii",id)
  const config = {
    method: "get",
    url: "/relation/find-friend/11",
    headers: {
       Authorization: `Bearer ${token}`,
    },
    // data: body,
  };

  console.log("cccccccccccccccc",config)
  baseServer(config)
    .then((response) => {
      console.log("BRAND",response)
      if (response) {
        res.status(200).json(response?.data);
      
      }
    })
    .catch((err) => {
      console.log("error caught in -> api/social/find friend", err);
      // console.log(err.response);
      if (err?.response) {
        const { status = {} } = err?.response;
        res.status(status).json(err.response.data);
      } else res.status(500).json({ message: "something went wrong" });
    
    });

}

export default withSession(handler);