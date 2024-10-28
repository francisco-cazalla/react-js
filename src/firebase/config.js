// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAiR5T6mGhlDHOM1b8-wIVIFLCfXEXI7zk",
authDomain: "coder-fran.firebaseapp.com",
projectId: "coder-fran",
storageBucket: "coder-fran.appspot.com",
messagingSenderId: "464056060227",
appId: "1:464056060227:web:4b76f6b60282126ff787f6",
measurementId: "G-S9K28BVV0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);


