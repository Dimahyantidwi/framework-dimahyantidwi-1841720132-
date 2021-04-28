import firebase from "firebase/app";
import  "firebase/auth";
import  "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDieZjpfXZbFxgK6tQ_II0jR33popyJwks",
    authDomain: "fir-login-3ec5e.firebaseapp.com",
    projectId: "fir-login-3ec5e",
    storageBucket: "fir-login-3ec5e.appspot.com",
    messagingSenderId: "704144290026",
    appId: "1:704144290026:web:a334b397afc18004f02793",
    measurementId: "G-WEQFZD54P4"
}
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
