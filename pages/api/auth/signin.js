import { collection, doc, getDoc} from "firebase/firestore";
import { v4 } from "uuid";
import { db } from "../../../lib/state_manager/firebase";



export default async function handler(req, res) {

    if(req.method == "POST"){
      const userData = req.body
      let userRef = doc(db, "helpz_users",userData.username);
      await getDoc(userRef)
      .then((_doc)=>{
        if(_doc.exists() && _doc.data().password === userData.password){
            res.status(201).json({ code: 201, msg : _doc.data()})
        }else{
            res.status(400).json({ code: 400, msg : 'Invalid credentials'})
        }
        
      })
      .catch(err => res.status(400).json({code : 400, msg : "unsuccessful"}))
      
    }

    
  }