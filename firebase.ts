import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpOr_qokX58Y3AXO9MK8zFpCcZ3CyFYDA",
  authDomain: "pdfpal-9c6c9.firebaseapp.com",
  projectId: "pdfpal-9c6c9",
  storageBucket: "pdfpal-9c6c9.firebasestorage.app",
  messagingSenderId: "723929628872",
  appId: "1:723929628872:web:df98e6320130e6705e65fd",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
