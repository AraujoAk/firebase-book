import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeKWFpM0x3JKCHG98a9NEm0GTU3k2JNys",
    authDomain: "book-list-with-firebase-e3ab0.firebaseapp.com",
    projectId: "book-list-with-firebase-e3ab0",
    storageBucket: "book-list-with-firebase-e3ab0.appspot.com",
    messagingSenderId: "544126821880",
    appId: "1:544126821880:web:b626eace557ce42d66e20d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);