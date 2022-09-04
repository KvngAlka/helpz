import React, { useState } from 'react'
import AuthCard from '../../lib/components/auth_card'
import {useRouter} from 'next/router'
import Logo from '../../lib/components/logo';

const Signin = () => {

    const [userData, setUserData] = useState({username : "", password : ""});
    const navigate = useRouter();

    const onDataChange = (e)=>{
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name] : value
        })
    }


    const onDataSubmit = (e)=>{
        e.preventDefault();
        alert(`Username : ${userData.username}  \n Password : ${userData.password}`)
    }
  return (
    <div className='main_cont grid_center' style={{backgroundColor : 'var(--bg-primary-10)'}}>
        <div style={{display : 'flex', flexDirection : 'column', minWidth : '500px', alignItems : 'center'}}>
            <Logo/>
            <AuthCard title={'Sign In'}>
                <div>
                    <input type="text" placeholder='username' name='username' value={userData.username} onChange = {onDataChange} />
                </div>
                <div>
                    <input type="password" placeholder='password' name='password' value={userData.password} onChange = {onDataChange} />
                </div>

                <button type='button' onClick={onDataSubmit} className='btn_primary'>
                    Sign In
                </button>

                <div>
                    <h4>Don't have an account?  <span onClick={()=> navigate.push('/auth/signup')}>Sign Up</span></h4>
                </div>
            </AuthCard>
        </div>

    </div>
  )
}

export default Signin