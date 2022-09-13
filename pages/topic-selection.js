import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import CheckBox from "../components/CheckBox";
import styles from "../styles/TopicSelection.module.css";
import React, { useEffect, useState } from "react";
import areaData from '../constants/areas';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Creates the topic selection page. User can select/deselect topics, select number of questions, and start the quiz.
 * @returns {JSX.Element} - JSX Element containing selectable/deselectable topics, number of questions, and start btn.
 */
export default function topicselection() {

  library.add(fas);

  const [flippedCards, setFlippedCards] = useState(
    new Array(areaData.areaCount).fill(false)
  )
  
   // Clear answers and questions from previous quiz
   useEffect(() => {
	   sessionStorage.clear();
   }, []);
  
  // Keep track of checked topics
  const [checkedState, setCheckedState] = useState(
    new Array(areaData.areas.length).fill(false)
  );
  const [query, updateQuery] = useState("?t0=");
  
  // Update the checkbox state when selected or deselected
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
	setCheckedState(updatedCheckedState);
  };
  
  // Select all topics
  const allTrue = () => {
	const updatedCheckedState = checkedState.map((item, index) =>
		areaData.areas[index].disabled === false ? true : false
	);
	for (let element of document.getElementsByClassName("check")){
		element.checked = true;
	}
	setCheckedState(updatedCheckedState);
  };
  
  // Deselect all topics
  const allFalse = () => {
	const updatedCheckedState = checkedState.map((item, index) =>
		areaData.areas[index].disabled === false ? false : false
	);
	setCheckedState(updatedCheckedState);
	for (let element of document.getElementsByClassName("check")){
		element.checked = false;
	}
  };

  // Flip topic card to show description
  const flipCard = (topic) => {
    const newArray = flippedCards.map((item, index) => 
      index === topic ? !item : item
    )
    setFlippedCards(newArray)
  }
  
  // Update the number of questions chosen
  const [number, setNumber] = useState(1);
  
  // Update the number of questions based on user input, maximum 20, minimum 1
  const updateNumber = () => {
    let numberBox = document.getElementById('numberBox').value;

	  if (numberBox < 1) {
		numberBox = 1;
      } else if (numberBox > 20) {
		  numberBox = 20;
		  document.getElementById('numberBox').value = 20
		  alert("A maximum of 20 questions can be chosen.");
      }
      setNumber(numberBox);
  };

  // Pass checkbox states (true or false) to quiz page
  const passValues = () => {
      const array = new Array(areaData.areas.length).fill(false)
      const allArray = new Array(areaData.areas.length).fill(false)
      if (JSON.stringify(checkedState) === JSON.stringify(array)){
        for (let i = 0; i < areaData.areas.length; i++){
            if (!areaData.areas[i].disabled){
                allArray[i] = true;
            }
        }
          sessionStorage.setItem("topics", JSON.stringify(allArray))
      }
      else {
          sessionStorage.setItem("topics", JSON.stringify(checkedState))
      }
      sessionStorage.setItem("questionCount", (number + ""))
  }
  
  return (
      <>
        <header className={styles.selectionGrid}>
			<h2>Select Topics and Number of Questions</h2>
		</header>

        <div className={styles.filter}>

					<select defaultValue={"Show_all_options"} id = "filters" className={styles.filterInput} >

						{/*<option value="Show_all_options" disabled hidden> Choose a filter</option>*/}
						<option value="Pharmacology">Pharmacology</option>
						<option value="Alternate_Concentrations_and_Dilutions">Alternate Concentrations and Dilutions</option>
						<option value="IV_Fluid_Therapy">IV Fluid Therapy</option>
						<option value="Nutrition">Nutrition</option>
						<option value="Blood_Transfusions">Blood Transfusions</option>
						<option value="Show_all_options">No Filter</option>

					</select>

					<div className={styles.filterButton}>
					{/*<button class="button btn-primary btn-lg m-2 py-2 px-4 rounded-3 justify-content-center" >*/}
				
						{/* Query string including all chosen topics */}
						<a onClick={setFilter}
						href="#"
						className={styles.buttonLink}
						>Apply Filter
						</a>
						{/*</button>*/}
					</div>
				</div>
				
		<div className={styles.buttonHolder}>
			<button className={styles.selectAll} onClick={allTrue}>
				Select All
			</button>
			<button className={styles.selectAll} onClick={allFalse}>
				Deselect All
			</button>
		</div>

        <div
          // class="container-fluid justify-content-center text-center"
          id="topics"
          className={styles.selectionGrid}
        >
		  
          <div className="form-check justify-content-center py-2">
            {areaData.areas.map((exp, idx) => {
				return (
				<>
					<CheckBox	
						key={idx}
						disabled={exp.disabled}
						topic={"topic" + idx}
						name={exp.title}
						icon={exp.icon}
						description={exp.desc}
						checked={checkedState[idx]}
						update={() => handleOnChange(idx)}
						flipped={flippedCards[idx]}
						cssFilter={exp.topicFilter}
						setFlippedCards={() => flipCard(idx)}
					/>

				</>
				);
			})}

				<div className={styles.startQuiz}>
				

					<label htmlFor='numberBox'>
						<input id='numberBox' className={styles.numberInput} type='number' min='1' max='20' placeholder='Quiz Length (max: 20)' onChange={updateNumber} />
					</label>
				
					<div className={styles.startButton}>
						{/* Query string including all chosen topics */}
						<a
						href={"quiz-page"}
						className={styles.startLink}
						onClick={passValues}
						>Start Quiz
						</a>
					</div>
				</div>
            
          </div>
            {/* End form */}
        </div>
        {/* End topics container */}

        {/* Bootstrap core JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* Core theme JS */}
        <script src="js/scripts.js"></script>
    </>
  );
}
/**
 * Gets the layout for topics selection page.
 * @param page
 * @returns {JSX.Element}
 */
topicselection.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
      <Footer />
    </Layout>
  );
};

// function to get the filters and compare them with the topics, if they are the same make the rest ivisable
function setFilter() {     
	
	let filterType = document.getElementById('filters')
    let filter = filterType.value;

    let topicNum = areaData.areaCount
	
	// Apply filter to each topic
	for(let i = 0; i < topicNum; i++){

        let topic = areaData.areas[i].topicFilter

		for (let element of document.getElementsByClassName(topic)){
			element.style.display="inline-block";
		 }

		if (filter != "Show_all_options") {
			if( topic != filter && topic != "None"){

			  for (let element of document.getElementsByClassName(topic)){
				element.style.display="none";
			 }
		}
		}
	}
}