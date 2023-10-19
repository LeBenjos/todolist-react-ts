import { collection, getDocs } from "firebase/firestore";
import { db } from "../../context/firebase";

export const getKanbans = async (projectId: string) => {
  if (!projectId) return;
  const kanbanList: any = [];

  const kanbanRef = collection(db, "projects", projectId, "kanban");
  const kanbanResultSnap = await getDocs(kanbanRef);

  kanbanResultSnap.forEach((doc) => {
    kanbanList.push({ ...doc.data(), state: doc.id });
  });

  return kanbanList;
};
