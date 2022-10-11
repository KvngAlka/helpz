import {  doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../lib/state_manager/firebase";



export default async function handler(req, res) {

    if(req.method == "POST"){
        const userId = req.body.id
      const userData = {...req.body, id : userId}
      let userRef = doc(db, "helpz_users",userData.username);
      await setDoc(userRef,userData,{merge : true})
      .then(async()=>{
        await getDoc(userRef)
        .then((_doc)=>{
            res.status(201).json({ code: 201, msg : _doc.data()})
        })
        .catch(err => res.status(400).json({code : 400, msg : "unsuccessful"}))
      })
      .catch(err => res.status(400).json({code : 400, msg : "unsuccessful"}))
      
    }

    
  }