import React, { useEffect, useState } from 'react'
import styles from '../../styles/ChatBox.module.css'
import { useStateValue } from '../state_manager/contextApi'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'
import axiosInstance from '../state_manager/axios';





function ChatBox() {

    const {state} = useStateValue();
    const [chats, setChats] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);
    const [userInput, setUserInput] = useState("");

    const [currentState, setCurrentState] = useState()
    
    const fetchData = async (url)=>{
      await axiosInstance.get(url)
      .then(res => { 
        console.log(res.data) 
        const {data} = res;
        
          switch(data.type){
            case "LINK" :
              setChats([...chats, data.data])
          }
        
      })
      .catch(err => { console.log(err) })
    }

    useEffect(()=>{
      // fetchData("/api/hello");
    },[])


    const sendMsg = (e)=> {
      e.preventDefault();
      if(!userInput) {alert("Please enter something"); return;}
      setChats([...chats, {id : Math.random(), title : userInput, sender : true}]);

      if(userInput === "1" || userInput.toLowerCase() === "CITSA Registration".toLowerCase()){
        fetchData('/api/hello/citsa_registration')
      }
      

      setUserInput('')
    }

  return (
    <div className={styles.chat_box}>

      <div className={styles.chat_view}>

        <div className={styles.chat_card_primary} >
          <h4>Hello {state.user?.fullname} . How may I help you? </h4>
        </div>
        <div className={styles.chat_card_primary} >
          <h4>1. CITSA Registration</h4>
          <h4>2. Contact Lecturer</h4>
          <h4>3. Access Course Materials</h4>
          <h4>4. Pay Dues</h4>
          <h4>5. Semester Activites</h4>
        </div>



        {
          chats?.map((chat, i)=>{
            return (
              <div className={chat.sender ? styles.chat_card_white : styles.chat_card_primary} key={i}>
                {chat.title}
              </div>
            )
          })
        }

      </div>

      <form onSubmit={sendMsg} className={styles.input_cont}>
          <div className={styles.input_field}>
              <input type="text" value={userInput} onChange={(e)=> setUserInput(e.target.value) }/>
              <div className={styles.send_btn} onClick={sendMsg}>
                <PaperAirplaneIcon/>
              </div>
          </div>
      </form>

    </div>
  )
}

export default ChatBox


