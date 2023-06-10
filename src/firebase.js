// import * as firebase from 'firebase'

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBTW8ENXnUj1VWanC6ru5ITSIgYp78xhaA",
    authDomain: "facebook-messenger-clone-69470.firebaseapp.com",
    projectId: "facebook-messenger-clone-69470",
    storageBucket: "facebook-messenger-clone-69470.appspot.com",
    messagingSenderId: "505644432316",
    appId: "1:505644432316:web:afb32a8850800a7799c9b9",
    measurementId: "G-SGZT9ZCJJR"
})
   
const db=firebaseApp.firestore()
export default db