import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4vt9AWlNTi0ZoUvUt2F1GXPMl9jxicG4",
    authDomain: "todo-list-d354b.firebaseapp.com",
    projectId: "todo-list-d354b",
    storageBucket: "todo-list-d354b.appspot.com",
    messagingSenderId: "241842925701",
    appId: "1:241842925701:web:a30e0c90597128bb8d39ec"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };