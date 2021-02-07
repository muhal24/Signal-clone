import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD0wzP42X7BzrbsSjmgvVtH6UaCxolp4rc",
    authDomain: "signal-clone-eecb2.firebaseapp.com",
    projectId: "signal-clone-eecb2",
    storageBucket: "signal-clone-eecb2.appspot.com",
    messagingSenderId: "917051131052",
    appId: "1:917051131052:web:bbbd301ef52c9873ef4b09"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};