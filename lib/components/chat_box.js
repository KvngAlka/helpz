import React, { useEffect, useState } from 'react'
import styles from '../../styles/ChatBox.module.css'
import { useStateValue } from '../state_manager/contextApi'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'
import axiosInstance from '../state_manager/axios';





function ChatBox() {

    const {state} = useStateValue();
    const [chats, setChats] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);


    const fetchData = async (url)=>{
      await axiosInstance.get(url)
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err) })
    }

    useEffect(()=>{
      fetchData("/api/hello");
    },[])

  return (
    <div className={styles.chat_box}>

      <div className={styles.chat_view}>

        <div className={styles.chat_card_primary}>
          {
            chats?.map((chat)=>{
              <div>
                home
              </div>
            })
          }
                <h4>Hello {state.user?.fullname} . </h4>
        </div>

      </div>

      <div className={styles.input_cont}>
          <div className={styles.input_field}>
              <input type="text" />
              <div className={styles.send_btn}>
                <PaperAirplaneIcon/>
              </div>
          </div>
      </div>

    </div>
  )
}

export default ChatBox


