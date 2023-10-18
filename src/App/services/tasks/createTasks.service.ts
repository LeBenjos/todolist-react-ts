import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../context/firebase";

export const createTask = async (
  projectId: string,
  taskDescription: string,
  state: string
) => {
  const queryRef = doc(db, "projects", projectId, "kanban", state);
  const resultSnap = await getDoc(queryRef);

  if (resultSnap.exists()) {
    await updateDoc(queryRef, {
      tasks: arrayUnion(taskDescription),
    });
  }
};
