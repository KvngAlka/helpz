import React from 'react'
import styles from '../../styles/AuthCard.module.css'

const AuthCard = ({children, title, submitFuntion}) => {
    let url  = `https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg`
    url = url = `https://media-exp1.licdn.com/dms/image/C4D0BAQEm4BD0Y9I5Ww/company-logo_200_200/0/1626441111910?e=2147483647&v=beta&t=76qqWUWuqVjEhESUFvP2IfNyunS6pR0zo9C4LXgblII`
  return (
    <div className={styles.auth_card}>
        <div className={styles.notch_cont}>
            <div className={styles.notch}></div>
        </div>

        <div className={styles.profile_cont}>

            <div className={styles.profile}>

                <img src={url} alt="" />

            </div>

        </div>

        <h2 className={styles.title}>{title}</h2>
        <form action="" onSubmit={submitFuntion}>
            {
                children
            }
        </form>

    </div>
  )
}

export default AuthCard