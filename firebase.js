// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA21s0RIYhpXIw8XTC4TnCS5gQEMsY_1Kw",
    authDomain: "flashcard-saas-4c9ee.firebaseapp.com",
    projectId: "flashcard-saas-4c9ee",
    storageBucket: "flashcard-saas-4c9ee.appspot.com",
    messagingSenderId: "441911176873",
    appId: "1:441911176873:web:f11b161073a40a2cf243b8",
    measurementId: "G-MCWEEWM2XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { db }