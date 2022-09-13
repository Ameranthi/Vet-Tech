import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, {useEffect, useState} from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userData from "../constants/data";
import areaData from '../constants/areas';

/**
 * Function creates an OverViewCard JSX.Element to display on page. Uses OverViewCard function.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Cards() {
    library.add(fas);
    return(

        <div className={styles.container}>
            {areaData.areas.map((exp, idx) => (
                <>
                    <OverViewCard
                        key={idx}
                        title={exp.title}
                        desc={exp.desc}
                        icon={exp.icon}
                        cssFilter = {exp.topicFilter}
                    />

                </>
            ))}
        </div>
    )
}
/**
 * Creates OverViewCard with params.
 * @param title
 * @param desc
 * @param icon
 * @returns {JSX.Element}
 * @constructor
 */
const OverViewCard = ({ title, desc, icon, cssFilter }) => {
    return (
        <a href="/topicOverview/#" className={styles.homeCard}>
        <FontAwesomeIcon icon={icon} size="5x"/>
        <h2>{title}</h2>
        <p className={styles.cardText}>{desc}</p>
        </a>
    );
  };
