// src/utils/firebase.utils.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp ,getDocs} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

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
export const auth = getAuth(firebaseApp);

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

export const signOutAdminUser = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      // Optionally, you can also redirect the user to the login page after sign out
    })
    .catch((error) => {
      console.error("Error signing out:", error.message);
    });
};

// Function to fetch emails from Firestore
export const fetchUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    // Check if the snapshot has documents
    if (querySnapshot.empty) {
      throw new Error("No contacts found in Firestore.");
    }

    // Map the documents to an array containing email, name, and message
    const contacts = querySnapshot.docs.map((doc) => ({
      email: doc.data().email,  // Extract email
      name: doc.data().name,    // Extract name
      message: doc.data().message, // Extract message
      subject: doc.data().subject, // Extract message
    }));

    return contacts;  // Return the array of contacts
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    return []; // Return an empty array if there was an error
  }
};