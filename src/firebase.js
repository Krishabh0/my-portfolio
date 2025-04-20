
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC08HOGESMKYggHBIIksU9yypFiFu-iOXo",
  authDomain: "portfolio-2-f3a3c.firebaseapp.com",
  projectId: "portfolio-2-f3a3c",
  storageBucket: "portfolio-2-f3a3c.firebasestorage.app",
  messagingSenderId: "568714972070",
  appId: "1:568714972070:web:2a0942a331020c7f991d67",
  measurementId: "G-C8MYCK6SJV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
