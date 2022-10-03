import Head from 'next/head'
import React from 'react'
import Navbar from '../../lib/components/navbar'
import styles from '../../styles/News.module.css'



const NewsTile = ({title, description})=>{
  return (
    <div className={styles.news_tile}>
        <div className={styles.avatar}>

        </div>
        <div className={styles.content}>
          <h1>{title}</h1>
          <h4>{description}</h4>
        </div>
    </div>
  )
}

const News = () => {

  const listNews = [
    {
      id : "1", title : "Voting", description : "Voting commences on 13th October 2022"
    },
    {
      id : "2", title : "SRC WEEK", description : "SRC celebrates SRC week called DIWALI"
    }
  ]
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