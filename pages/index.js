import Navbar from '../lib/components/navbar';
import { useStateValue } from '../lib/state_manager/contextApi'
import styles from '../styles/Home.module.css'
import robot from '../lib/assets/robot.png'
import Image from 'next/image';
import Head from 'next/head';
import ChatBox from '../lib/components/chat_box';
import { useEffect, useState } from 'react';
import Loading from '../lib/components/loading';

export default function Home() {

  const {state} = useStateValue();
  const [pageLoading, setPageLoading] = useState(true);


  useEffect(()=>{
    setPageLoading(false)
  },[])


  if(pageLoading) return <Loading/>

  return (
    <>
      <Head>
        <title>Helpz - Chat</title>
      </Head>
      <Navbar/>
      <div className={styles.home}>
        <div className={styles.robot_cont}>
          <div >
            <Image src={robot} layout='fill' objectFit='contain' />
          </div>
          
        </div>
        <div className={styles.chat_box}>
          <ChatBox/>

        </div>
       
      </div>
    </>
  )
}
