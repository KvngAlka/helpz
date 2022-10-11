import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Navbar from '../lib/components/navbar'
import axiosInstance from '../lib/state_manager/axios'
import { SIGNIN } from '../lib/state_manager/constants'
import { useStateValue } from '../lib/state_manager/contextApi'
import styles from '../styles/Settings.module.css'

const Settings = () => {
  const [userData, setUserData] = useState({username : "", password : "", fullname : ""});
  const [updating, setUpdating] = useState(false)
  const {state : {user}, dispatch} = useStateValue()

  const onDataChange = (e)=>{
    const {name, value} = e.target;
    setUserData({
        ...userData,
        [name] : value
    })
  }

  const onDataSubmit = async(e)=>{
    e.preventDefault();

    setUpdating(true)
    await axiosInstance.post("/api/user_update",userData)
    .then((res)=>{ 

        localStorage.setItem("userData", JSON.stringify(res.data.msg));
        dispatch({type : SIGNIN, payLoad : res.data.msg})
        setUpdating(false)

    })
    .then(_=> alert('updated successfully'))
    .catch(err => { alert('Failed to update'); console.log(err) ;setUpdating(false)})
  }


  useEffect(()=>{
    if(user) setUserData(user)
  },[])

  return (
    <>
        <Head>
            <title>Helpz - Settings</title>
        </Head>
        <Navbar/>
        <div className={`main_cont ${styles.settings}`}>
          <form style={{display : "flex", flexDirection : "column", width : "100%", alignItems : "center", backgroundColor : 'var(--white'}}>
          <input type="text" placeholder='full name' name='fullname' value={userData.fullname} onChange={onDataChange} />
            <input type="text" placeholder="username" name="username" value={userData.username} onChange = {onDataChange} />
            <input type="password" placeholder="password" name="password" value={userData.password} onChange = {onDataChange} />

            <button type="button" onClick={onDataSubmit} className="btn_primary">
                {updating ? "Updating" : "Update"}
            </button>
        </form>
    </div>
    </>
  )
}

export default Settings