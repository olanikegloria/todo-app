import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9hfyoGTlWWKNPN5gKRtkdIFNBS-Fxwyw",
  authDomain: "todo-app-6a909.firebaseapp.com",
  projectId: "todo-app-6a909",
  storageBucket: "todo-app-6a909.appspot.com",
  messagingSenderId: "533947396250",
  appId: "1:533947396250:web:0d99ff56d2e3db98cc6f23",
  measurementId: "G-TLVFD80TK8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };