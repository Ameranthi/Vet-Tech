import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import { collection, db, getFirestore, onSnapshot, getDocs, } from "firebase/firestore";
import Cards from '../components/overviewCard';
import VETTECH from "../public/VETTECH.svg"

/**
 * Container displaying topic in cards.
 * @returns {JSX.Element} - topic cards
 * @constructor
 */
export default function Topics() {
    
    return(
    <div className={styles.container}>
        <div className={styles.grid}>
            <Cards />

        </div>
    </div>
    );
}
/**
 * Gets the layout of topics page.
 * @param page
 * @returns {JSX.Element}
 */
Topics.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavBar />
        {page}
        <Footer />
      </Layout>
    )
  }