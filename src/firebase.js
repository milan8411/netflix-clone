import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAq6Eqy1bYJM8dbm3VjfEekMoEzZ3TFyos",
    authDomain: "netflix-clone-yt-5a0de.firebaseapp.com",
    projectId: "netflix-clone-yt-5a0de",
    storageBucket: "netflix-clone-yt-5a0de.appspot.com",
    messagingSenderId: "35521071014",
    appId: "1:35521071014:web:0344b29a3cdaec48bef167"
  };    

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
