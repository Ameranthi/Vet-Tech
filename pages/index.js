import Head from 'next/head'
import styles from '../styles/HomePage.module.css'
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaw} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import React, {useEffect, useState} from "react";
import {app} from "../firebase/firebase";
import {collection, db, getFirestore, onSnapshot, getDocs,} from "firebase/firestore";
import Cards from '../components/overviewCard';
import VETTECH from "../public/VETTECH.svg";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ReactGA from 'react-ga';


//Initializing the reactGA using the Universal Analytic Property (Current Usage)
// TODO: Move this code piece into its own file?
ReactGA.initialize('UA-219533615-1');
if (typeof window !== "undefined") {
	ReactGA.pageview(window.location.pathname);
}

import firebase from "../firebase/firebase"

firebase();

/**
 * Creates the homepage (index.js).
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
    library.add(fas);
  return (
    <div>
	  {/* Banner 1 */}
      <div className={styles.banner}>
        <div className={styles.twoSection}>
		{/* Homepage image by MicroOne, retrieved Jan 27 2022
		    Source: https://stock.adobe.com/ca/images/veterinary-concept-veterinarian-clinic-tiny-doctors-caring-puppy-vet-services-for-pets-medical-care-for-dog-vector-illustration-dog-visit-veterinary-veterinarian-specialist-examination/315000199?prev_url=detail*/}
        <Image
          src={VETTECH}
		  layout="intrinsic"
		  width={800}
		  height={500}
        ></Image>
        </div>
        <div className={styles.twoSection}>
          <h1>Students today, heroes tomorrow.</h1>
		  <p>Preparing vet technician students for pet owners' peace of mind.</p>
        </div>
      </div>

	  {/* Banner 2 */}
      <div className={styles.colorBanner}>
        <h1 className={styles.title}>What we offer</h1>
		<div className={styles.threeRow}>
		
			<div className={styles.threeSection}>
			  <FontAwesomeIcon icon="chart-line" size="2x"/>
			  <h2 className={styles.title}>Realistic questions</h2>
			  <p>Questions are based on realistic veterinary math to help students apply their knowledge directly.</p>
			</div>

			<div className={styles.threeSection}>
			  <FontAwesomeIcon icon="ruler" size="2x"/>
			   <h2 className={styles.title}>Simple interface</h2>
			   <p>Vet Tech has a simple, easy-to-learn user interface so users can practice efficiently and see meaningful results.</p>
			</div>

			<div className={styles.threeSection}>
			  <FontAwesomeIcon icon="balance-scale" size="2x"/>
				<h2 className={styles.title}>Diverse topics</h2>
				<p>A comprehensive range of topics is included to provide a balanced education for a variety of scenarios.</p>
			</div>
		  </div>
		
		</div>

	  {/* Banner 3 */}
      <div className={styles.banner2}>
        <div className={styles.missionStatement}>
          <h1 className={styles.title}>Our Mission</h1>
          <p>
            Welcome to the Vet Tech website, where you will enhance your knowledge of key concepts and build a proper understanding of veterinarian 
            calculations. Our goal is to build a better connection between vet tech students and the amazing animals they will treat in the future. 
            We do this by providing a range of topics and questions that mirror real-world treatment scenarios.
          </p>
        </div>
      </div>
	  
	  {/* Banner 4 */}
	  <div className={styles.colorBanner}>
        <h1 className={styles.title}>What you'll learn</h1>
		<div className={styles.threeRow}>
		
			<div className={styles.threeSection}>
			  <FontAwesomeIcon icon="apple-alt" size="2x"/>
			  <h2 className={styles.title}>Animal diet</h2>
			  <p>Learn how to manage weight, nutrition, and hydration to keep animals healthy.</p>
			</div>

			<div className={styles.threeSection}>
			  <FontAwesomeIcon icon="prescription" size="2x"/>
			  <h2 className={styles.title}>Pharmaceuticals</h2>
			  <p>Practice preparing medicine concentrations and calculating safe dosage amount.</p>
			</div>

			<div className={styles.threeSection}>
			  <FontAwesomeIcon icon="heartbeat" size="2x"/>
			  <h2 className={styles.title}>Emergency care</h2>
			  <p>Improve understanding of blood transfusions, shock fluid dosing, and other procedures.</p>
			</div>
		  </div>
		
		</div>

	  {/* Banner 5 */}
      <div className={styles.banner2}>
          <h1 className={styles.title}>Start learning today!</h1>
		  <div>
			<div className={styles.selectTopicButtonContainer}>
			  <a className={styles.selectTopicButton} href="/topic-selection">Topics</a>
			</div>
      </div>
      </div>

    </div>
  );
}
/**
 * Gets the layout of homepage.
 * @param page
 * @returns {JSX.Element}
 */
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar/>
      {page}
      <Footer/>
    </Layout>
  )
}
