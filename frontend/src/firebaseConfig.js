import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyBwJqbHrRPvZHOy2TBDC2h-ouVQetgd5tc",
  authDomain: "blogpost-team4.firebaseapp.com",
  projectId: "blogpost-team4",
  storageBucket: "blogpost-team4.appspot.com",
  messagingSenderId: "313874540005",
  appId: "1:313874540005:web:8b7af36458b0f664ad7b0c",
  measurementId: "G-TH0YHK6DP2" 
});
const storage = getStorage(app);
export default storage;