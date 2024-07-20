// Import the functions you need from the SDKs you need
import { initializeApp, firebase} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN4K_EdXfJpuJFIQMyO2ZjiZlf7zVj2Vc",
  authDomain: "electra-a1833.firebaseapp.com",
  projectId: "electra-a1833",
  storageBucket: "electra-a1833.appspot.com",
  messagingSenderId: "470046726842",
  appId: "1:470046726842:web:7e6cb01f158d9d46cec083",
  measurementId: "G-42JGFFNYT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = firebase.firestore();
