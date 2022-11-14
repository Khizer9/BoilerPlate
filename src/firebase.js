import firebase from "./firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjnrCniuKLMD5RkPBrDBr7w1qvjwAEbXw",
    authDomain: "react-firebase-redux-84b8e.firebaseapp.com",
    projectId: "react-firebase-redux-84b8e",
    storageBucket: "react-firebase-redux-84b8e.appspot.com",
    messagingSenderId: "816118462231",
    appId: "1:816118462231:web:c42d95dbb0ff0a03c4e952"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export {auth, googleAuthProvider, facebookAuthProvider};