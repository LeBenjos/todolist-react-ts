import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../context/firebase";
import { kanbanValues } from "../projects/createProjets.service";

export const getKanbans = async (projectId: string) => {
  const projectRef = doc(db, "projects", projectId);
  const resultSnap = await getDoc(projectRef);

  const kanbanList: any = [];

  kanbanValues.forEach((state) => {
    const kanbanRef = doc(db, "projects", projectId, "kanban", state);
    getDoc(kanbanRef).then((res) => {
      res.exists()
        ? kanbanList.push({
            state,
            data: res.data(),
          })
        : {};
    });
  });

  return kanbanList;
};
