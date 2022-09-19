import React from 'react'
import styles from '../../styles/AuthCard.module.css'

const AuthCard = ({children, title, submitFuntion}) => {
    const url  = `https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg`

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