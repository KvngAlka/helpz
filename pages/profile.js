import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Navbar from '../lib/components/navbar'
import { LOGOUT } from '../lib/state_manager/constants'
import { useStateValue } from '../lib/state_manager/contextApi'
import styles from '../styles/Profile.module.css'

const Profile = () => {
    const {state,dispatch} = useStateValue();
    


    const onLogout = ()=>{
        const isLogout = confirm('Are you sure you want to logout');

        if(isLogout){
            dispatch({type : LOGOUT})
            localStorage.removeItem("userData");
        }
    }

    useEffect(()=>{
        const temp = state?.user?.username?.split('/')
    },[])

    let url  = `https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg`

    url = `https://media-exp1.licdn.com/dms/image/C4D0BAQEm4BD0Y9I5Ww/company-logo_200_200/0/1626441111910?e=2147483647&v=beta&t=76qqWUWuqVjEhESUFvP2IfNyunS6pR0zo9C4LXgblII`

  return (
    <>
        <Head>
            <title>Helpz - {'@'}{state.user?.username}</title>
        </Head>
        <Navbar/>
        <div className={`main_cont ${styles.profile}`}>
            <div className={styles.profile_cont}>
                <div className={styles.top}>
                    <div className={styles.profile_img}>
                        <img src={url} alt='' />
                    </div>
                </div>

                <div className={styles.profile_detail}>
                    <div>
                        <h4>Full Name</h4>
                        <h2>{state.user?.fullname}</h2>
                    </div>
                    <div>
                        <h4>User Name</h4>
                        <h2>{state.user?.username}</h2>
                    </div>

                    <div>
                        <h4>Programme</h4>
                        <h2>{'BSc Information Technology'}</h2>
                    </div>
                </div>

                <div>
                    <button onClick={onLogout}>
                        LOGOUT
                    </button>
                </div>

            </div>

        </div>
    </>
    
  )
}

export default Profile