import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import AuthCard from '../../lib/components/auth_card'
import Logo from '../../lib/components/logo';

const SignUp = () => {

    const [userData, setUserData] = useState({fullname : "",username : "", password : "",c_password : ""});
    const navigate = useRouter();


    useEffect(()=>{
        if(state.user){
            navigate.push("/")
        }
    },[navigate])

    const onDataChange = (e)=>{
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name] : value
        })
    }


    const onDataSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='main_cont grid_center' style={{backgroundColor : "var(--bg-primary-10)"}}>
        <Head>
            <title>Helpz - Sign Up</title>
        </Head>

        <div  style={{display : "flex", flexDirection : "column", minWidth : '500px', alignItems : 'center'}}>
            <Logo/>
            <AuthCard title={'Sign Up'}>
                <div>
                    <input type="text" placeholder='full name' name='fullname' value={userData.fullname} onChange={onDataChange} />
                </div>
                <div>
                    <input type="text" placeholder='username' name='username' value={userData.username} onChange={onDataChange} />
                </div>
                <div>
                    <input type="password" placeholder="password" name="password" value={userData.password} onChange={onDataChange} />
                </div>

                <div>
                    <input type="password" placeholder='confirm password' name='c_password' value={userData.c_password} onChange={onDataChange} />
                </div>

                <button type='button' onClick={onDataSubmit} className='btn_primary'>
                    Sign Up
                </button>

                <div>
                    <h4>Don't have an account?  <span onClick={()=> navigate.push("/auth/signin")}>Sign In</span></h4>
                </div>
            </AuthCard>
        </div>

    </div>
  )
}

export default SignUp