import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../context/firebase";

export const createProjects = async (userId: string, projectName: string) => {
  const queryRef = collection(db, "users", userId, "projects");

  return await addDoc(queryRef, {
    name: projectName,
  });
};
