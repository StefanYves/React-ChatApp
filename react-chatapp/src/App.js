import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./styles.scss";

const firebaseConfig = {
  apiKey: "AIzaSyDGQEc1w4nqrm9NMOZ2-t5GOCdEJjNl_jU",
  authDomain: "react-chatapp-49cb4.firebaseapp.com",
  projectId: "react-chatapp-49cb4",
  storageBucket: "react-chatapp-49cb4.appspot.com",
  messagingSenderId: "164281111409",
  appId: "1:164281111409:web:b0086991b0927473725cd0",
};

const app = initializeApp(firebaseConfig);

function App() {
  return <Home />;
}

export default App;
