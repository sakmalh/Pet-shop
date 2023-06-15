import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAT295aYTRI5on0_ElGqMp525s7jDEK688",
    authDomain: "pet-shop-4f398.firebaseapp.com",
    projectId: "pet-shop-4f398",
    storageBucket: "pet-shop-4f398.appspot.com",
    messagingSenderId: "260743646144",
    appId: "1:260743646144:web:428f9f3bfebea7f1ed9625"
  };
  
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }