import { LINK_TYPE} from "../../../lib/state_manager/constants";

export default function handler(req, res) {
  res.status(200).json(
    { 
      title : "ACCESS COURSE MATERIALS",
      type : LINK_TYPE,
      data : "Copy and paste this link in your browser to access pasco : https://pasco.ucc.edu.gh/login "
    }
  )
}