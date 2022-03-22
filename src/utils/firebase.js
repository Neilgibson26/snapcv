import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// config
const firebaseConfig = {
  apiKey: "AIzaSyB1mXONn6pI-ArODA53M9T937Ii2fdSi2E",
  authDomain: "snapshotcv-c5be7.firebaseapp.com",
  projectId: "snapshotcv-c5be7",
  storageBucket: "snapshotcv-c5be7.appspot.com",
  messagingSenderId: "721564158580",
  appId: "1:721564158580:web:c2907b157000c11ceddf21",
  measurementId: "G-7LCFFZV1P3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, analytics, provider, auth };
