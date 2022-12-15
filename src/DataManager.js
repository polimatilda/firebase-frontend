import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl0M_nSQoXn0loKlDKVMcBECna6lzGbqo",
  authDomain: "fir-practice-fd64c.firebaseapp.com",
  projectId: "fir-practice-fd64c",
  storageBucket: "fir-practice-fd64c.appspot.com",
  messagingSenderId: "850055364911",
  appId: "1:850055364911:web:d6d19aa8d7b4579a7fa1da"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getPeople = async () => {
  const querySnapshot = await getDocs(collection(db, "people"));
  const people = []
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    people.push(doc.data())
  });

  return people
}

export const addPerson = async (name, height, mass) => {
  try {
    const docRef = await addDoc(collection(db, "people"), {
      name, height, mass
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}