import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../context/firebase";

export const deleteProject = async (projectId: string, userId: string) => {
  if (!projectId) return;
  if (!userId) return;

  const projectRef = doc(db, "projects", projectId);
  await deleteDoc(projectRef);

  const userRef = doc(db, "users", userId, "projects", projectId);
  await deleteDoc(userRef);
};
