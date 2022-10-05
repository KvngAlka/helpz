import { LINK_TYPE} from "../../../lib/state_manager/constants";

export default function handler(req, res) {
  res.status(200).json(
    { 
      title : "DUES PAYMENT",
      type : LINK_TYPE,
      data : "You can pay your dues through this MOMO Number : 0249320695, ACCOUNT NAME : Dela Amegatse, REFRENCE : CITSA DUES"
    }
  )
}