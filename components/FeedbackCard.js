// Custom component for feedback cards
 
// Takes the question number, question content, user's answer,
// and the correct answer for the question.

import styles from "../styles/Home.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userData from "../constants/data";
import areaData from '../constants/areas';
import React, { useEffect, useState } from "react";

const FeedbackCard = ({number, question, answer, correct, solution}) => {
	return (
		<div className={styles.question}>
			<h2>Question {number}</h2> 
			<p>{question}</p>
			<h2>Your Answer:</h2>
			<p className={styles.userAnswer}>{answer}</p>
			<h2>Correct Answer:</h2>
			<p className={styles.correctAnswer}>{correct}</p>
			<h2>Solution:</h2>
			<p className={styles.correctAnswer}>{solution}</p>
	   </div>
    );
};

export default FeedbackCard