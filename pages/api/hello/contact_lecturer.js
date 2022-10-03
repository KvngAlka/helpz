
import { LIST_TYPE } from "../../../lib/state_manager/constants";

export default function handler(req, res) {
  res.status(200).json(
    { 
      title : "Hello there! How may I help you?",
      type : LIST_TYPE,
      data : [
      ]
    }
  )
}
