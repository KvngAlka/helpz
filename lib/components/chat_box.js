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
    const [msg, setMsg] = useState("")
    const optObj = { 
      "1" : "CITSA Registration", 
      "2" :  `Lecturers' Info`,
      "3" : `Access Course Materials`,
      "4" : `Pay Dues`,
      "5" : `Semester Activites`,
    }
    const [options, setOptions] = useState([]);
    const [level, setLevel] = useState(1)
    
    const fetchData = async (url)=>{
      await axiosInstance.get(url)
      .then(res => { 
        let {data} = res;
        
          switch(data.type){
            case "LINK" :
              data = {...data, data : `${data.data}`}
              setChats([...chats, {...data}])
              break;

            case "LIST":
              console.log(data)
              data = {...data, data : data.data.map(val => `${val}`)}
              data = [
                ...data.data.map(val => ({ data : val} ) )
              ]

              console.log(data)
              setChats([...chats, ...data])
              // data = {}
          }
        
      })
      .catch(err => { console.log(err) })
    }

    useEffect(()=>{
      // fetchData("/api/hello");
      if(msg){
        if(level > 1 && msg === "0" ||  msg.toLowerCase() === 'back'){
          // setLevel(level - 1);
        }else if(level === 1){

          if(msg === "1" || msg.toLowerCase() === "CITSA Registration".toLowerCase()){
            fetchData('/api/hello/citsa_registration')
          }else if (msg === "2" || msg.toLowerCase() === `Lecturers' Info`.toLowerCase()){
            fetchData('/api/hello/lecturers_info')
          }
          else if (msg === "3" || msg.toLowerCase() === `Access Course Materials`.toLowerCase()){
            fetchData('/api/hello/pasco')
          }
          
          else if (msg === "4" || msg.toLowerCase() === `Pay Dues`.toLowerCase()){
            fetchData('/api/hello/dues')
          }

          //INCRESE LEVEL
          // setLevel(level + 1)
        }else if(level === 2){

        }
        
      }

    },[msg])


    const sendMsg = (e)=> {
      e.preventDefault();
      if(!userInput) {alert("Please enter something"); return;}
      setChats([...chats, {id : Math.random(), data: userInput, sender : true}]);
      setMsg(userInput);
      setUserInput('')
    }

  return (
    <div className={styles.chat_box}>

      <div className={styles.chat_view}>

        <div className={styles.chat_card_primary} >
          <h4>Hello {state.user?.fullname} . How may I help you? </h4>
        </div>
        <div className={styles.chat_card_primary} >
          {
            Object.entries(optObj).map(val => <h4 key={val[0]}>{val[0]}. {val[1]}</h4>)
          }
        </div>



        {
          chats?.map((chat, i)=>{
            return (
              <div className={chat.sender ? styles.chat_card_white : styles.chat_card_primary} key={i}>
                {chat.data}
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


