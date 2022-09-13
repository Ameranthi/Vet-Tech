import React from 'react'
import Image from "next/image"
import userData from "../constants/data";
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

/**
 * Creates AboutDev page detailing us the developers using AboutCards.
 * @returns {JSX.Element} - AboutDev page
 * @constructor
 */
export default function AboutDev(){
    return (
        
        <div className={styles.container}>
        
          {/* Experience card */}
          {userData.aboutDev.map((exp, idx) => (
            <>
              <AboutCard
                key={idx}
                name={exp.name}
                bio={exp.bio}
                role={exp.role}
                personalLink={exp.personalLink}
                LinkedInLink={exp.LinkedInLink}
                GitHubLink={exp.GitHubLink}
                imgUrl={exp.imgUrl}
              />
            
            </>
          ))}
        </div>
    )
}
/**
 * Card detailing the developer including name, bio, role, and image of developer.
 * @param name
 * @param bio
 * @param role
 * @param imgUrl
 * @returns {JSX.Element} - AboutCard JSX Element
 * @constructor
 */
const AboutCard = ({ name, bio, role, personalLink, LinkedInLink, GitHubLink, imgUrl }) => {
    const personalTF = personalLink === "";
    const linkedinTF = LinkedInLink === "";
    const githubTF = GitHubLink === "";
    return (

      <div className={styles.aboutDev}>
      
        <div className={styles.imgDevWrap}>
          <Image
          src={imgUrl}
          alt="Profile"
          layout = "fixed"
          className={styles.imgDev}
          placeholder="blur"
          blurDataURL={"https://placedog.net/250/250?random"}
          //objectFit = 'contain'
          width={250}
          height={250}
          />
        </div>
          <div className={styles.devLinks}>
              {personalTF ? true:  <a href={personalLink}>Portfolio<br /></a>}
              {linkedinTF ? true:  <a href={LinkedInLink}>LinkedIn<br /></a>}
              {githubTF ? true:  <a href={GitHubLink}>GitHub<br /></a>}
          </div>
        <div className={styles.devName}>
            <h1>{name}</h1>
          <h3>{role}</h3>
        </div>
          <div className={styles.devBio}>
            <p>
            {bio}</p>
          </div>
      </div>
    );
  };

/**
 * Returns the layout for AboutDev page.
 * @param page
 * @returns {JSX.Element}
 */
AboutDev.getLayout = function getLayout(page) {
    return (
      <Layout>
      <NavBar />
       {page}
      <Footer />
      </Layout>
    )
  }
