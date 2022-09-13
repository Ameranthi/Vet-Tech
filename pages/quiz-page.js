import React, { useEffect, useState } from "react";
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from "../styles/Home.module.css";
import Question from "../components/Question";
import areaData from '../constants/areas';
import * as math from "mathjs";

/**
 * Creates quiz page. Collects quiz questions from the question file and displays them in divs.
 * @returns {JSX.Element} - Questions from question file.
 */
export default function quizpage() {
  // set debug to true to see debug info in console log
  const debug = false;
  const [track, setTrack] = useState(0);
	
  // Get the data for building this quiz
  const [topics, setTopics] = useState([]);  
  const [questionData, setQuestionData] = useState([]);
  const [number, setNumber] = useState(1);
  const [total, setTotal] = useState(0);
  
  // Keep track of the user's answers
  const [questionsAnswered, setAnswers] = useState([]);
  
  // Update the user's answers when the input changes
  const setUserInput = (pos) => {
	  const queryUpdate = questionsAnswered.map((item, index) =>
		  index === pos ? "q" + (pos + 1) + "=" + event.target.value : item
		);
	  setAnswers(queryUpdate);
  };
  
  // Store the user's answers
  const buildQuery = () => {
	  for (let i = 0; i < questionsAnswered.length; i++) {
		  sessionStorage.setItem("q" + i, questionsAnswered[i]);
	  }
  }
  
  // Build a question object
  const buildQuestion = (quesData, total) => {
	
	// Get the content and variables for each question
	let questionContent = quesData.questionText;
	let contentVars = questionContent.match(/{.*?}/g);
	
	// Get all the equations for this question
	let questionEquation = quesData.solveEquation;
	let equationParts = questionEquation.split(" ");
	let equationVars = questionEquation.match(/{.*?}/g);
	
	// Get the solution method for this question
	let questionSolution = quesData.solveMethod;
	let methodVars = questionSolution.match(/{.*?}/g);
	
	// Generate values for the variables in this question
	let newValues = generateDynamicQuestion(contentVars, total);
	
	// Replace the variables with the values generated for the quiz
	for (let j = 0; j < newValues.length; j++) {
		questionContent = questionContent.replace(contentVars[j], newValues[j]);
	}
	
	// Replace the variables for each equation with the values generated for the quiz
	for (let j = 0; j < equationVars.length; j++) {
		let variableLocation = parseInt(equationVars[j].substring(1,2));
		let varIndex = variableLocation - 1;
		for (let k = 0; k < equationParts.length; k++) {
			equationParts[k] = equationParts[k].replaceAll("{" + variableLocation + "}", newValues[varIndex]);
		}
	}
	
	// Fill in the solution method for this question
	for (let j = 0; j < methodVars.length; j++) {
		let variableLocation = parseInt(methodVars[j].substring(1,2));
		let varIndex = variableLocation - 1;
		questionSolution = questionSolution.replaceAll("{" + variableLocation + "}", newValues[varIndex]);
	}
	
	// Put the question into an object
	let question = {
		content: questionContent,
		equation: equationParts,
		method: questionSolution
	};
	
	return question;
  }
  
  // Generate random variables for questions
  const generateDynamicQuestion = (variables, total) => {
	let allVars = [];
	if(debug){console.log(variables);}
	
	// Calculate each randomized variable for a given question
	for (let k = 0; k < variables.length; k++) {
		
		// Get each part of a variable set
		let characters = variables[k].split(",");
		let finalValue = 0;
		let decimalCount = 0;
		
		// Determine the number of decimal places for the variable
		if (characters[characters.length - 1] == 'd1}') {
			decimalCount = 1;
		} else if (characters[characters.length - 1] == 'd2}') {
			decimalCount = 2;
		}
		
		// Generate a variable
		if (characters[0] != '{c') {
			// Generate random number within given range
			let mini = 0;
			let maxi = 0;
			if (characters[0] == '{n') {
				mini = parseFloat(characters[1]);
				maxi = parseFloat(characters[2]);
			} else {
				mini = parseFloat(characters[0].slice(1));
				maxi = parseFloat(characters[1]);
			}
			let number = Math.random() * (maxi - mini) + mini;
			
			// Fix variable to given decimal place count
			finalValue = number.toFixed(decimalCount);
		} else {
			// Generate random number within given range
			let mini = parseFloat(characters[3]);
			let maxi = parseFloat(characters[4]);
			let number = Math.random() * (maxi - mini + 1) + mini;
			
			// Add/subtract from given variable and fix to given decimal place count
			if (characters[2] === 'p') {
				finalValue = (parseFloat(allVars[characters[1] - 1]) + number).toFixed(decimalCount);
			} else {
				finalValue = (parseFloat(allVars[characters[1] - 1]) - number).toFixed(decimalCount);
			}
		}
		if(debug){console.log(finalValue);}
		
		// Replace the variable set with the new value
		allVars.push(finalValue);
	}
	return allVars;
  }



  useEffect(() => {
	  console.log(sessionStorage.getItem('topics'))
	  setAnswers([]);
	  setTopics([]);
	  let sessionTopicsList = JSON.parse(sessionStorage.getItem("topics"));
	  let questionCount = parseInt(sessionStorage.getItem("questionCount"))
	  let topicsList = [];
	  for (let i = 0; i < sessionTopicsList.length; i++){
		  if (sessionTopicsList[i]){
			  topicsList.push(i);
		  }
	  }
	  for (let i = 0; i < questionCount; i++) {
		let index = i + 1;
		setAnswers(questionsAnswered => [...questionsAnswered, "q" + index + "="])
	  }
	  if(debug){console.log(topicsList);}
	  if(debug){console.log("Run " + questionCount + " questions");}
	  let questionsArray = [];
	  for (let i = 0; i < questionCount; i++){
		  let topicArea = topicsList[Math.floor(Math.random() * topicsList.length)];
		  let questionNumber = Math.floor(Math.random() * areaData.areas[topicArea].questions.length);
		  let question = buildQuestion(areaData.areas[topicArea].questions[questionNumber], total);
		  questionsArray.push(question)
		  setQuestionData(questionData => [...questionData, question.content]);
	  }
	  sessionStorage.setItem("questions", JSON.stringify(questionsArray))
	  if(debug){console.log(sessionStorage.getItem("questions"))}

  }, []);

  return(
	<div className={styles.container}>
        {questionData.map((exp, idx) => {
            return (
                <>
                <Question
                    key={idx}
                    number={idx+1}
                    content={exp}
                    update={() => setUserInput(idx)}
                /> </>
            );
        })}
		
        <a className={styles.submit} href={'feedback'} onClick={buildQuery}>Submit</a>
    </div>
  )
}
/**
 * Gets the layout for quiz page.
 * @param page
 * @returns {JSX.Element}
 */
quizpage.getLayout = function getLayout(page) {
  return (
    <Layout>
    <NavBar />
     {page}
     <Footer />
    </Layout>
  )
}