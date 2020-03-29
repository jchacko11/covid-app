// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

//import firestorter
import { initFirestorter } from 'firestorter';

const firebaseConfig = {
  apiKey: "AIzaSyDLQgOtDniy-FeXtIjCAgYB7QjiEbBQeBY",
  authDomain: "covid-app-c8cff.firebaseapp.com",
  databaseURL: "https://covid-app-c8cff.firebaseio.com",
  projectId: "covid-app-c8cff",
  storageBucket: "covid-app-c8cff.appspot.com",
  messagingSenderId: "667852460159",
  appId: "1:667852460159:web:79b99fa44be4f955392f4a",
  measurementId: "G-S7XT9G6MX1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize `firestorter`
initFirestorter({ firebase: firebase });
