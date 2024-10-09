// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDSIPdtCMJJqZoDj6pEYDZJRsAkqWUSJo0",
  // authDomain: "dragonnews-aba6a.firebaseapp.com",
  // projectId: "dragonnews-aba6a",
  // storageBucket: "dragonnews-aba6a.appspot.com",
  // messagingSenderId: "609138167637",
  // appId: "1:609138167637:web:70c91eb509391af8f7a9dc"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.PROJECTID,
  storageBucket:import.meta.env.STORAGEBUCKET,
  messagingSenderId:import.meta.env.MESSAGINGSENDERID,
  appId:import.meta.env.APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;