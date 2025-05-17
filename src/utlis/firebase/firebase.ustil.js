// src/utils/firebase.utils.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVO5d-FQv1OTI-S16BXDRIF3ZCS4Euz1c",
  authDomain: "contentcove-43e4e.firebaseapp.com",
  projectId: "contentcove-43e4e",
  storageBucket: "contentcove-43e4e.firebasestorage.app",
  messagingSenderId: "863757457730",
  appId: "1:863757457730:web:c5dc1a05197d128e6850db",
  measurementId: "G-0TDHHGDGJ9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const saveContactMessage = async (formData) => {
  try {
    const contactRef = collection(db, "contacts");
    await addDoc(contactRef, {
      ...formData,
      createdAt: serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.error("Error saving contact message:", error);
    return false;
  }
};
