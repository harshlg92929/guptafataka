// firebase.js
import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";
import { fatakaList, options } from "./utils/products";

const firebaseConfig = {
  apiKey: "AIzaSyDfyzdnduo7omvK-B-9xQ3kXkkfsXVRtsY",
  authDomain: "guptafatakabhandar.firebaseapp.com",
  projectId: "guptafatakabhandar",
  storageBucket: "guptafatakabhandar.firebasestorage.app",
  messagingSenderId: "964303866698",
  appId: "1:964303866698:web:05e8f583cd5611a68f8fb3",
  measurementId: "G-8CT540WSPN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchFataka = async () => {
  const querySnapshot = await getDocs(collection(db, "fataka"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

const fetchCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

const uploadFatakaData = async () => {
  const fatakaCollection = collection(db, "fataka");
  for (const item of fatakaList) {
    try {
      await addDoc(fatakaCollection, item);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
};

const updateCategory = async () => {
  const fatakaCollection = collection(db, "categories");
  for (const item of options) {
    try {
      await addDoc(fatakaCollection, item);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
};

export { db, fetchFataka, fetchCategories, uploadFatakaData, updateCategory };
