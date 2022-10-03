
import { LINK_TYPE} from "../../../lib/state_manager/constants";

export default function handler(req, res) {
  res.status(200).json(
    { 
      title : "CITSA REGISTRATION",
      type : LINK_TYPE,
      data : "https://www.google.com"
    }
  )
}