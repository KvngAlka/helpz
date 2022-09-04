import React from 'react'
import Logo from './logo'
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'





const NavLink = ({link,title})=>{
    return(
        <Link href={link}>
            <a >{title}</a>
        </Link>
    )
}



const Navbar = () => {
    const navigate = useRouter();

    const url  = `https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg`
  return (
    <div className={styles.navbar}>
        <Logo/>
        <div className={styles.nav_links}>
            <Link href={'/'} >Chat</Link>
            <Link href={'/news'}>News</Link>
            <NavLink title={'Settings'} link = {'/settings'}/>
        </div>

        <div className={styles.img} onClick={()=>navigate.push('/profile')}>
            <img src={url} alt="" />
        </div>
    </div>
  )
}

export default Navbar