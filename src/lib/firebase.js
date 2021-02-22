// import { seedDatabase } from "../seed";
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAI0Y7_vVW95gZRVpgIrx5GBq1ks5Pnotg",
  authDomain: "instagram-clone-ee150.firebaseapp.com",
  projectId: "instagram-clone-ee150",
  storageBucket: "instagram-clone-ee150.appspot.com",
  messagingSenderId: "789557478838",
  appId: "1:789557478838:web:0a7f1b25b8dad9f8aead17",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
