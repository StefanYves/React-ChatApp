import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGQEc1w4nqrm9NMOZ2-t5GOCdEJjNl_jU",
  authDomain: "react-chatapp-49cb4.firebaseapp.com",
  projectId: "react-chatapp-49cb4",
  storageBucket: "react-chatapp-49cb4.appspot.com",
  messagingSenderId: "164281111409",
  appId: "1:164281111409:web:b0086991b0927473725cd0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
