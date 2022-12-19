import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLhkZh9dSb0M2TFfGm_T7dorqi8xjR3a4",
  authDomain: "onepagedan.firebaseapp.com",
  projectId: "onepagedan",
  storageBucket: "onepagedan.appspot.com",
  messagingSenderId: "447973604488",
  appId: "1:447973604488:web:a7a2f4ffc3a84fadcdf33d",
  measurementId: "G-JG04NK70Y8"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();