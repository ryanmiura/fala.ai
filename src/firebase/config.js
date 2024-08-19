// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, initializeFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //Config do seu firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth_mod = getAuth(app)

const db = getFirestore(app)
const pesquisaCollection = collection(db, "pesquisas")

const storage = getStorage(app)

export {auth_mod, pesquisaCollection, db, storage}