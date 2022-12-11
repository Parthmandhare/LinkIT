import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDcRyH3MQNGjD1TH27EdHYYLV38GVwen_8",
  authDomain: "fir-a5371.firebaseapp.com",
  databaseURL: "https://fir-a5371-default-rtdb.firebaseio.com",
  projectId: "fir-a5371",
  storageBucket: "fir-a5371.appspot.com",
  messagingSenderId: "504991716308",
  appId: "1:504991716308:web:3ccf350fc2593a9842bc41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth();

export{app, auth};