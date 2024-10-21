// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBe6q44-wVAqnQITklN794qmuF24OwIn1A",
    authDomain: "app2-69833.firebaseapp.com",
    projectId: "app2-69833",
    storageBucket: "app2-69833.appspot.com",
    messagingSenderId: "251352689998",
    appId: "1:251352689998:web:b27db5709ec3cff47e821f",
    measurementId: "G-7VRPJXBM6X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app); // Firestore instance

export { analytics, auth, db };