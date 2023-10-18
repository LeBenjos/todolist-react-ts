import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../context/firebase";

export const addMembers = async (memberId: string, projectId: string) => {
  const userRef = doc(db, "users", memberId, "projects", projectId);

  const userResult = await getDoc(userRef);

  if (userResult.exists()) {
    const projectRef = doc(db, "projects", projectId);
    const projectResults = await getDoc(projectRef);

    if (projectResults.exists()) {
      console.log(projectResults.data());
      await updateDoc(projectRef, {
        participants: [
          ...(projectResults.data()?.participants || []),
          memberId,
        ],
      });
      return true;
    }
  } else {
    return false;
  }
};
