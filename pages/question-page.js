import React, { useEffect, useState } from "react";
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from "../styles/Home.module.css";
import { app } from "../firebase/firebase";
import * as Sanitize from "./api/sanitize"; // This is the import for the sanitization JS script
import Question from "../components/Question";
import { useRouter } from "next/router";
import areaData from '../constants/areas';

export default function questionpage() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [query, updateQuery] = useState();
  
  const router = useRouter();
  const queryParams = router.query;
  
  // Keep track of answered questions
  const [questionsAnswered, setAnswers] = useState(
    new Array(queryParams.count).fill("")
  );
  
  const setUserInput = formIn => {
	  updateQuery("?q1=" + formIn.target.value);
  }
  
  useEffect(() => {
    setQuestion(areaData.areas[3].questions[0].questionText);
	setAnswer(areaData.areas[3].questions[0].solveEquation);
  }, []);
  
  return (
    <div>
		<div className={styles.container}>
		  <main className={styles.main}>
			<Question number="1" content={question} update={setUserInput}/>
			<a className={styles.submit} href={"/feedback" + query}>Submit</a> 
		  </main>
		</div>
    </div>
  )
}
questionpage.getLayout = function getLayout(page) {
  return (
    <Layout>
    <NavBar />
     {page}
     <Footer />
    </Layout>
  )
}