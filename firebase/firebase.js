// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAnalytics, logEvent} from "firebase/analytics";
import firebase from "firebase/compat/app";
import 'firebase/compat/analytics'
import 'firebase/compat/analytics'
import 'firebase/compat/firestore'
import 'firebase/compat/performance'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//The provided measurmentID is for Google Analytics, a GA4 property.
const firebaseConfig = {
  apiKey: "AIzaSyB4YsZ8iuul7GsAlqNAgLkL_OqGGkOuAb4",
  authDomain: "ppvt-x691.firebaseapp.com",
  databaseURL: "https://ppvt-x691-default-rtdb.firebaseio.com",
  projectId: "ppvt-x691",
  storageBucket: "ppvt-x691.appspot.com",
  messagingSenderId: "632657422490",
  appId: "1:632657422490:web:957408ab9cfe5357221723",
  measurementId: "G-69Q96YR23B"
};

// Initialize Firebase![](../../../../../AppData/Local/Temp/download.jpg)
export const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    if (typeof window !== 'undefined') {
      if ('measurementId' in firebaseConfig && firebase.analytics.isSupported()) {
        firebase.analytics();
        firebase.performance();
        const analytics = getAnalytics();
      }
    }

  }
}