import React, { useEffect, useState } from "react"
import AuthCard from "../../lib/components/auth_card"
import {useRouter} from "next/router"
import Logo from "../../lib/components/logo";
import { useStateValue } from "../../lib/state_manager/contextApi";
import { SIGNIN } from "../../lib/state_manager/constants";
import Head from "next/head";
import axiosInstance from "../../lib/state_manager/axios";

const Signin = () => {

    const [userData, setUserData] = useState({username : "", password : ""});
    const navigate = useRouter();
    const {state,dispatch} = useStateValue()
    const [onLoad, setOnLoad] = useState(false);


    useEffect(()=>{
        if(state.user){
            navigate.push("/")
        }
    },[state.user,navigate])

    const onDataChange = (e)=>{
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name] : value
        })
    }


    const onDataSubmit = async(e)=>{
        e.preventDefault();
        setOnLoad(true)
        await axiosInstance.post("/api/auth/signin",userData)
        .then((res)=>{ 

            localStorage.setItem("userData", JSON.stringify(res.data.msg));
            dispatch({type : SIGNIN, payLoad : res.data.msg})
            setOnLoad(false)

        })
        .catch(err => { alert('Failed to login'); setOnLoad(false)})
    }
  return (
    <div className="main_cont grid_center">
        <Head>
            <title>Helpz - Sign In</title>
        </Head>
        <div style={{display : "flex", flexDirection : "column", width : "100%", alignItems : "center"}}>
            <Logo/>
            <AuthCard title={"Sign In"} submitFuntion = {onDataSubmit}>
                <div>
                    <input type="text" placeholder="username" name="username" value={userData.username} onChange = {onDataChange} />
                </div>
                <div>
                    <input type="password" placeholder="password" name="password" value={userData.password} onChange = {onDataChange} />
                </div>

                <button type="button" onClick={onDataSubmit} className="btn_primary">
                    {onLoad ? "Signing in..." : "Sign In"}
                </button>

                <div>
                    <h4>{`Don't have an account?`}  <span onClick={()=> navigate.push("/auth/signup")}>Sign Up</span></h4>
                </div>
            </AuthCard>
        </div>

    </div>
  )
}

export default Signin