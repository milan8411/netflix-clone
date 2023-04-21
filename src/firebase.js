import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeyzbvw4KMXsq7CIzdxAe1N-PTiSjoXLQ",
  authDomain: "netflix-clone-851ae.firebaseapp.com",
  projectId: "netflix-clone-851ae",
  storageBucket: "netflix-clone-851ae.appspot.com",
  messagingSenderId: "94738161392",
  appId: "1:94738161392:web:ae1411630402fb7c99ac35",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
