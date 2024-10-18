// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY58-WzZnMSoIX4MwQtxtF3JviSvX-_1I",
  authDomain: "expense-tracker-b47a8.firebaseapp.com",
  projectId: "expense-tracker-b47a8",
  storageBucket: "expense-tracker-b47a8.appspot.com",
  messagingSenderId: "411132499805",
  appId: "1:411132499805:web:0b1a540039c1ebc3477ab4",
  measurementId: "G-B5TNEJNK8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth with persistence using AsyncStorage for React Native
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Firestore references for "trips" and "expenses" collections
export const tripRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;
