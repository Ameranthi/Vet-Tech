// Custom component for topic selection checkboxes
 
// Takes the topic number, name for topic, icon path, topic
// decription, and function for saving checkbox state

import styles from "../styles/Home.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userData from "../constants/data";
import areaData from '../constants/areas';
import React, { useEffect, useState } from "react";

const Question = ({number, content, update}) => {
	return (
		<div className={styles.question}>
            <h2>Question {number}</h2> 
              <p>{content}</p>
              <form className={styles.questionForm}>
                <textarea className={styles.textarea} cols={60} rows={3} onChange={update} required placeholder="Enter response here..." />
              </form>
       </div>
    );
};

export default Question