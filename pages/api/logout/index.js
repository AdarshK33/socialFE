// import { server } from "../../../utils/axios";
import withSession from "../../../utils/session";
// const logger = require("pino")();


function handler(req, res) {
  const body = req.body;
  req.session.destroy();
  return res.status(200).json({ message: "Loggged Out" });
}

export default withSession(handler);
