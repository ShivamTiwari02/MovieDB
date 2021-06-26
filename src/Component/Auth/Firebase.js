import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAw1Q7qbKbEk8AzIR0-F3EMk479qHPvOLU",
    authDomain: "moviedb-6d9de.firebaseapp.com",
    projectId: "moviedb-6d9de",
    storageBucket: "moviedb-6d9de.appspot.com",
    messagingSenderId: "537425834440",
    appId: "1:537425834440:web:c4925decea0fd182c9d0fd"
  };

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}