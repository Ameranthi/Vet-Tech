import React, { useEffect, useState } from "react";
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from "../styles/Home.module.css";
import { app } from "../firebase/firebase";
import { collection, db, getFirestore, onSnapshot } from "firebase/firestore";
//test line please ignore
import Question from "../components/Question";
import FeedbackCard from "../components/FeedbackCard";
import areaData from '../constants/areas';
import * as math from "mathjs";

/**
 * Checks user's answers and displays feedback for incorrect answers.
 * @returns {JSX.Element} - JSX Element containing user feedback
 */
export default function feedback() {
	const [track, setTrack] = useState(0);
	
	// Retrieve the number of questions for this quiz
	const [number, setNumber] = useState(1);
	
	// Keep track of the user's answers
    const [questionsAnswered, setAnswers] = useState([]);
	const [allQuestions, setQuestions] = useState([]);
	const [wrongAnswers, setWrongs] = useState([]);
	const [score, setScore] = useState(0);
	
    useEffect(() => {
		// Empty the answer array
		setQuestions([]);
		setWrongs([]);
		let currScore = 0;
		
		// If the query string is ready, increase the size of the answer array
		let questionList = JSON.parse(sessionStorage.getItem("questions"))
		// Get all question data
		for (let i = 0; i < questionList.length; i++) {
			let question = questionList[i];
			console.log(question);

			// Get data for each question
			if (question != null) {
				let decimalCount = 2;
				let finalAnswer = "";

				let questionContent = question.content;
				let equationParts = question.equation;
				let questionSolution = question.method;

				console.log(questionContent);
				console.log(equationParts);
				console.log(questionSolution);

				// Evaluate each equation
				for (let k = 0; k < equationParts.length; k++) {
					let answerContent = math.evaluate(equationParts[k]);
					if (typeof answerContent === "object"){
						answerContent = answerContent._data[0];
						// console.log("Something funky happened to a number")
					}
					answerContent = answerContent.toFixed(decimalCount);
					finalAnswer += answerContent + " ";
				}
				finalAnswer = finalAnswer.trim();
				console.log(finalAnswer);

				// Add question data to array
				let questionData = [questionContent, finalAnswer, questionSolution];
				setQuestions(allQuestions => [...allQuestions, questionData]);

				// Get answers and check correctness; increment score if correct, show feedback if not
				let answer = sessionStorage.getItem("q" + i);
				console.log(answer);
				if (answer.slice(3) !== finalAnswer) {
					setWrongs(wrongAnswers => [...wrongAnswers, answer]);
				} else {
					setWrongs(wrongAnswers => [...wrongAnswers, ""]);
					currScore++;
				}
			}
		setScore(currScore);

		// Otherwise, increment number and rerender until query is ready
		}
		setNumber(JSON.parse(sessionStorage.getItem("questions")).length);
    }, []);
	
	console.log(wrongAnswers);
	
    return (
		
        <div className={styles.container}>
				<div className={styles.container}>
					<h1 className={styles.score}>Your score:</h1>
					<p className={styles.wholeFeedback}>{score} / {number} = {(score / number * 100).toFixed(2)}%</p>
				</div>
				
				{wrongAnswers.map((exp, idx) => {
					let answer;
					let questionNum;
					answer = wrongAnswers[idx].slice(wrongAnswers[idx].indexOf('=') + 1)
					questionNum = wrongAnswers[idx].substring(1,wrongAnswers[idx].indexOf('='))
					return (
						exp !== "" &&
						<FeedbackCard
							key={idx}
							number={questionNum} //.substring(1,2)
							question={allQuestions[idx][0]}
							answer={answer}
							correct={allQuestions[idx][1]}
							solution={allQuestions[idx][2]}
						/>
					)
				})}
				
				<div className={styles.container}>
					<a className={styles.submit} href="/topic-selection">
						New Quiz
					</a>
				</div>
        </div>
    )
}
/**
 * Gets layout of feedback page.
 * @param page
 * @returns {JSX.Element}
 */
feedback.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NavBar />
            {page}
            <Footer />
        </Layout>
    )
}