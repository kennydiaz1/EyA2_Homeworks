import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdCstW-58GEwLfzLelK1TOt4w5PCHnhrI",
  authDomain: "eya2-homeworks.firebaseapp.com",
  projectId: "eya2-homeworks",
  storageBucket: "eya2-homeworks.appspot.com",
  messagingSenderId: "616144003644",
  appId: "1:616144003644:web:832fbd0fb2eca9da7bd939",
  measurementId: "G-PKSW2JV0VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth, firebaseStorage, db};