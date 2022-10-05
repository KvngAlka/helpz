
import { LINK_TYPE} from "../../../lib/state_manager/constants";

export default function handler(req, res) {
  res.status(200).json(
    { 
      title : "COURSE REGISTRATION",
      type : LINK_TYPE,
      data : "Copy and paste the link to your browser to access the registration form : https://portal.ucc.edu.gh/frames/index.php "
    }
  )
}