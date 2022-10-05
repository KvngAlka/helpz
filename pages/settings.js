import Head from 'next/head'
import React, { useState } from 'react'
import Navbar from '../lib/components/navbar'

const Settings = () => {
  const [userData, setUserData] = useState({username : "", password : ""});

  const onDataChange = (e)=>{
    const {name, value} = e.target;
    setUserData({
        ...userData,
        [name] : value
    })
  }

  const onDataSubmit = async(e)=>{
    e.preventDefault();
    await axiosInstance.post("/api/auth/signin",userData)
    .then((res)=>{ 

        localStorage.setItem("userData", JSON.stringify(res.data.msg));
        dispatch({type : SIGNIN, payLoad : res.data.msg})

    })
    .catch(err => { alert('Failed to login')})
  }


  return (
    <>
        <Head>
            <title>Helpz - Settings</title>
        </Head>
        <Navbar/>
        <div className="main_cont">
          <div style={{display : "flex", flexDirection : "column", width : "100%", alignItems : "center", backgroundColor : 'var(--white'}}>
            <div>
                <input type="text" placeholder="username" name="username" value={userData.username} onChange = {onDataChange} />
            </div>
            <div>
                <input type="password" placeholder="password" name="password" value={userData.password} onChange = {onDataChange} />
            </div>

            <button type="button" onClick={onDataSubmit} className="btn_primary">
                Sign In
            </button>

            <div>
                <h4>{`Don't have an account?`}  <span onClick={()=> navigate.push("/auth/signup")}>Sign Up</span></h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default Settings