import React from 'react'
import styles from '../../styles/ChatBox.module.css'
import { useStateValue } from '../state_manager/contextApi'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'





function ChatBox() {

    const {state} = useStateValue();

  return (
    <div className={styles.chat_box}>

      <div className={styles.chat_view}>

        <div className={styles.chat_card_primary}>
                <h4>Hello {state.user?.username} . Welcome to Helpz</h4>
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