import React, { useEffect, useState } from 'react'
import { collection, db, getFirestore, onSnapshot } from 'firebase/firestore'
import { app } from '../firebase/firebase'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import stylesTopic from '../styles/topicoverview.module.css'
import Image from "next/image";

/**
 * Creates an overview of topics webpage. Collects topics from FireStore, and displays each topic.
 * 
 * @returns {JSX.Element}
 */
export default function topicOverview() {
  const coll = collection(getFirestore(), 'topics')
  const [dataList, setDataList] = useState([])
  const [currentTopicIndexs, setcurrentTopicIndexs] = useState({})
  useEffect(() => {
    onSnapshot(coll, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const dataItem = doc.data() || {}
        dataItem.id = doc.id
        if (dataItem.desc && dataItem.QuestionExample) {
          setDataList((prevState) => [...prevState, dataItem])
          setcurrentTopicIndexs((prevState) => {
            const obj = {...prevState}
            obj[`${dataItem.id}`] = false
            return obj
          })
        }
      })
    })
  }, [])
  //const currentTopic = dataList[currentTopicIndexs]

  const handleClick = (index) => {
      setcurrentTopicIndexs((prevState) => {
        const obj = {...prevState}
        obj[`${index}`] = !obj[`${index}`]
        return obj
      })
  }
  return (
    <div>
      {/* <NavBar /> */}
      {/* Header*/}
      {/* <header className></header> */}
      {/* Page Content*/}
      <div className="container">
        <div className={`${stylesTopic.cardContainer}`}>
          <h2 className={stylesTopic.header}>Topic Overview</h2>
          <div className={stylesTopic.topicButtons}>
            {dataList.map((topic, index) => (
              <div
                className={`${styles.card} ${stylesTopic.topicCard}`}
                key={index}
                onClick={() => handleClick(topic.id)}
              >
                <div 
                  className={stylesTopic.topicCardInner}
                  style={currentTopicIndexs[`${topic.id}`] ? {transform: 'rotateY(180deg)'} : {}}
                >
                  <div className={stylesTopic.topicCardFront}>
                    <h2>{topic.id}</h2>
                    <Image
                      src={`/Icons/${topic.imgFilePath !== undefined ? topic.imgFilePath.slice(16) : "Cat.svg"}`}
                      alt="icon"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className={stylesTopic.topicCardBack}>
                    <p><b>Description</b></p>
                    <p>{topic.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}
/**
 * Gets the layout for topics Overview page.
 * @param page
 * @returns {JSX.Element}
 */
topicOverview.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
      <Footer />
    </Layout>
  )
}
