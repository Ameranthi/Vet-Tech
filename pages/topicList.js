import React, { useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import { collection, db, getFirestore, onSnapshot } from "firebase/firestore";

/**
 * Lists all the topics available from FireStore path "topics".
 * @returns {JSX.Element} - List containing all topics
 */
function topicList() {
  const coll = collection(getFirestore(), "topics");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    onSnapshot(coll, (snapshot) => {
      setTopics(snapshot.docs.map((doc) => doc.id));
    });
  }, []);
  const topicList = topics.map((topic) => <h4 key={topic}> {topic} </h4>);

  return <div>{topicList}</div>;
}
export default topicList;
