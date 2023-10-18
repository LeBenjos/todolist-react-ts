import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../context/firebase";
import { kanbanValues } from "../projects/createProjets.service";

export const getKanbans = async (projectId: string) => {
  if (!projectId) return;

  const projectRef = doc(db, "projects", projectId);
  const resultSnap = await getDoc(projectRef);

  const kanbanList: any = [];

  const kanbanRef = collection(db, "projects", projectId, "kanban");
  const kanbanResultSnap = await getDocs(kanbanRef);

  kanbanResultSnap.forEach((doc) => {
    kanbanList.push({ ...doc.data(), state: doc.id });
  });

  return kanbanList;
};
