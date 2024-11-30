import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOption } from "../../utils/session";
// import withSession from "../../utils/session";

export default withIronSessionApiRoute(userRoute, sessionOption);

async function userRoute(req, res) {
  if (req.session.user) {
     console.log("inside if", req.session.user);
    // console.log("hello api user",req.session.user)
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      // ...req.session.user.email,
      // ...req.session.user.role,
      isLoggedIn: true,
    });
  } else {
    // console.log("inside else", req.session.user);
    res.json({
      isLoggedIn: false,
    });
  }
}
// export default withSession(userRoute);
