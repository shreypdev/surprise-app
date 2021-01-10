import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeamC7YXwlMPOp43xKJJPtzZ4Yo-KchbE",
    authDomain: "surprise-app-2775f.firebaseapp.com",
    projectId: "surprise-app-2775f",
    storageBucket: "surprise-app-2775f.appspot.com",
    messagingSenderId: "68679385706",
    appId: "1:68679385706:web:c515faf765aa9090098013",
    measurementId: "G-CFKNFBWC5W"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
