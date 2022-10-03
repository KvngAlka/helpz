// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { LINK_TYPE, LIST_TYPE, STRING_TYPE } from "../../../lib/state_manager/constants";

export default function handler(req, res) {
  res.status(200).json(
    { 
      title : "How may I help you?",
      type : LIST_TYPE,
      data : [
        {
          link : "/hello/citsa_registration",
          title : "CITSA REGISTRATION",
          type : LINK_TYPE
        },
        {
          link : "/hello/contact_lecturer",
          title : "Contact Lecturer",
          type : LIST_TYPE
        }
      ]
    }
  )
}
