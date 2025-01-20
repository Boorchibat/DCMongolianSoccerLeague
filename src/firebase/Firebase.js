import { collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

  
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
  export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUpFunction = (firstName, lastName, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(() => {
    return updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    });
  });
};

export const signInFunction = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutFunction = () => {
  return signOut(auth);
};
  
  
  export const database = getFirestore(app);
  export const teamCollection = collection(database, "team");
  export const gameCollection = collection(database, "game")
  export const tableCollection = collection(database, "table")
  export const resultsCollection = collection(database, "results")



  