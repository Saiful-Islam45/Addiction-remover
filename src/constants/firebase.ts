
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { getAuth } from 'firebase/auth';
import {getDatabase} from 'firebase/database';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx6cmClJ1SLjzk44WxgiUNyy9wSBJCwCI",
  authDomain: "addiction-remover.firebaseapp.com",
  projectId: "addiction-remover",
  storageBucket: "addiction-remover.appspot.com",
  messagingSenderId: "363736768323",
  appId: "1:363736768323:web:2a46b97b4d84e99d6ed9f6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth(app);