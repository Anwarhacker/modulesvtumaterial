// Firebase configuration and initialization
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDYbuAUbhnztm5OCf7JI_mAY779_hz7-eE",
  authDomain: "vtumaterial-46ef7.firebaseapp.com",
  projectId: "vtumaterial-46ef7",
  storageBucket: "vtumaterial-46ef7.firebasestorage.app",
  messagingSenderId: "639239076667",
  appId: "1:639239076667:web:a8ba54cf9e83ccceab151e",
  measurementId: "G-EQKS5H6LCX",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export default app
