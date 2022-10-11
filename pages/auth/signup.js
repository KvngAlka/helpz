import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"
import AuthCard from "../../lib/components/auth_card"
import Logo from "../../lib/components/logo";
import { useStateValue } from "../../lib/state_manager/contextApi";
import axiosInstance from "../../lib/state_manager/axios";

const SignUp = () => {

    const [userData, setUserData] = useState({fullname : "",username : "", password : "",c_password : ""});
    const navigate = useRouter();
    const {state, dispatch} = useStateValue();
    const [onLoad, setOnLoad] = useState(false);



    useEffect(()=>{
        if(state.user){
            navigate.push("/")
        }
    },[navigate,state.user])

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
        axiosInstance.post("/api/auth/register", userData)
        .then((res)=> {
            navigate.push('/auth/signin')
            setOnLoad(false)
        })
        .catch(err => {alert(err); setOnLoad(false)})
    }
  return (
    <div className='main_cont grid_center'>
        <Head>
            <title>Helpz - Sign Up</title>
        </Head>

        <div  style={{display : "flex", flexDirection : "column", width : '100%', alignItems : 'center'}}>
            <Logo/>
            <AuthCard title={'Sign Up'} submitFuntion = {onDataSubmit} >
                <div>
                    <input type="text" placeholder='full name' name='fullname' value={userData.fullname} onChange={onDataChange} />
                </div>
                <div>
                    <input type="text" placeholder='username e.g PSITC180013' name='username' value={userData.username} onChange={onDataChange} />
                </div>
                <div>
                    <input type="password" placeholder="password" name="password" value={userData.password} onChange={onDataChange} />
                </div>

                <div>
                    <input type="password" placeholder='confirm password' name='c_password' value={userData.c_password} onChange={onDataChange} />
                </div>

                <button type='button' onClick={onDataSubmit} className='btn_primary'>
                    {onLoad ? "Signing up..." : "Sign Up"}
                </button>

                <div>
                    <h4>{`Don't have an account? `} <span onClick={()=> navigate.push("/auth/signin")}>Sign In</span></h4>
                </div>
            </AuthCard>
        </div>

    </div>
  )
}

export default SignUp