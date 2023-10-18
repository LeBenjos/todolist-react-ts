import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../context/firebase";

export const addMembers = async (memberMail: string, projectId: string) => {
  const userRef = doc(db, "users", memberMail);

  const userResult = await getDoc(userRef);

  if (userResult.exists()) {
    const projectRef = doc(db, "projects", projectId);
    const projectResults = await getDoc(projectRef);

    if (projectResults.exists()) {
      console.log(projectResults.data());
      await updateDoc(projectRef, {
        participants: [memberMail],
      });
      return true;
    } else {
      return false;
    }
  }
};
