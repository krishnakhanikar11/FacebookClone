import firebase from 'firebase';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBCShOA9EH-WDKe6kmOiI212zO0Y9WE3Y0",
    authDomain: "faceclone-86944.firebaseapp.com",
    projectId: "faceclone-86944",
    storageBucket: "faceclone-86944.appspot.com",
    messagingSenderId: "758030127164",
    appId: "1:758030127164:web:4afe79d86f7e11892f7339",
    measurementId: "G-WL5NQJ9CNF"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();
  

  export{db,storage};