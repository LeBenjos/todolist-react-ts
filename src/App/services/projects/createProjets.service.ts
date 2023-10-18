import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../context/firebase";

const kanbanValues = ["todo", "doing", "done"];

export const createProjects = async (
  userId: string | null,
  projectName: string
) => {
  if (!userId) return;

  const userProjectsRef = collection(db, "users", userId, "projects");
  const userProjectSnap = await addDoc(userProjectsRef, {
    name: projectName,
  });

  const projectRef = doc(db, "projects", userProjectSnap.id);
  await setDoc(projectRef, {
    name: projectName,
  });

  kanbanValues.forEach((state) => {
    const kanbanProjectRef = doc(
      db,
      "projects",
      userProjectSnap.id,
      "kanban",
      state
    );

    setDoc(kanbanProjectRef, {
      tasks: [],
    });
  });
};
