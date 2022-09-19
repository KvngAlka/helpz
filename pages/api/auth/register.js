import { collection, doc, setDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { db } from "../../../lib/state_manager/firebase";



export default async function handler(req, res) {

    if(req.method == "POST"){
      const userId  = v4()
      const userData = {...req.body, id : userId}
      let userRef = doc(db, "helpz_users",userData.username);
      await setDoc(userRef,userData,{merge : true})
      .then(()=>{
        res.status(200).json({ code: 200, msg : 'successfull'})
      })
      .catch(err => res.status(400).json({code : 400, msg : "unsuccessful"}))
      
    }

    
  }