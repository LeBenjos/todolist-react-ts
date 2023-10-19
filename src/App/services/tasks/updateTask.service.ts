import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../context/firebase";

export const updateTask = async (
  projectId: string,
  previousState: string,
  newState: string,
  taskData: string
) => {
  const taskRef = doc(db, "projects", projectId, "kanban", previousState);
  await updateDoc(taskRef, {
    tasks: arrayRemove(taskData),
  });

  const newStateRef = doc(db, "projects", projectId, "kanban", newState);
  await updateDoc(newStateRef, {
    tasks: arrayUnion(taskData),
  });
};
