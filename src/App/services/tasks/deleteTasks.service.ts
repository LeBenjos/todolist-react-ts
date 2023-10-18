import { arrayRemove, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../context/firebase";

export const deleteTasks = async (
  projectId: string,
  taskDescription: string,
  currentState: string
) => {
  const queryRef = doc(db, "projects", projectId, "kanban", currentState);
  const resultSnap = await getDoc(queryRef);

  if (resultSnap.exists()) {
    await setDoc(queryRef, {
      tasks: arrayRemove(taskDescription),
    });
  }
};
