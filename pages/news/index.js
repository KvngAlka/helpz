import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Navbar from '../../lib/components/navbar'
import axiosInstance from '../../lib/state_manager/axios'
import styles from '../../styles/News.module.css'



const NewsTile = ({title, description})=>{
  const url = `https://media-exp1.licdn.com/dms/image/C4D0BAQEm4BD0Y9I5Ww/company-logo_200_200/0/1626441111910?e=2147483647&v=beta&t=76qqWUWuqVjEhESUFvP2IfNyunS6pR0zo9C4LXgblII`
  return (
    <div className={styles.news_tile}>
        <div className={styles.avatar}>
          <img src={url} alt="" />
        </div>
        <div className={styles.content}>
          <h1>{title}</h1>
          <h4>{description}</h4>
        </div>
    </div>
  )
}

const News = () => {
  const [listNews, setListNews] = useState([])
  useEffect(()=>{
    const fetchNews = async()=>{
      await axiosInstance.get('/api/news').then(res => setListNews(res.data))
    }

    fetchNews();
  })
  return (
    <>
      <Head>
          <title>Helpz - News</title>
      </Head>
      <Navbar/>
      <div className={styles.news_cont}>
        {
          listNews.map((news,i)=> <NewsTile title = {news.title} description = {news.description}  key = {i}/>  )
        }
      </div>
        
    </>
  )
}

export default News