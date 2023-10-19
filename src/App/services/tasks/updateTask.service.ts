import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../context/firebase";

export const updateTask = async (
  projectId: string,
  previousState: string,
  newState: string,
  taskData: string
) => {
  const taskRef = doc(db, "projects", projectId, previousState);
  await updateDoc(taskRef, {
    tasks: arrayRemove(taskData),
  });

  const newStateRef = doc(db, "projects", projectId, newState);
  await updateDoc(newStateRef, {
    tasks: arrayUnion(taskData),
  });
};
