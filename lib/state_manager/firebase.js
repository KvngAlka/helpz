
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8vm3OKRcKi6lKIVSgcRWXSFdaoAgdY2Y",
  authDomain: "seriousprojects-1.firebaseapp.com",
  databaseURL: "https://seriousprojects-1.firebaseio.com",
  projectId: "seriousprojects-1",
  storageBucket: "seriousprojects-1.appspot.com",
  messagingSenderId: "824631723696",
  appId: "1:824631723696:web:3af435528de3dda3095d75",
  measurementId: "G-M0H27RRC2X"
};

// Initialize Firebase

let app ;
if(!getApps().length){
  app = initializeApp(firebaseConfig) 
}
  
const db = getFirestore(app);

export {db}