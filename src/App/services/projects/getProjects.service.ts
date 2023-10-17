import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../context/firebase";

export const getProjects = async (userId: string) => {
  const queryRef = collection(db, "users", userId, "projects");
  const resultSnap = await getDocs(queryRef);

  const projectList: any = [];

  resultSnap.forEach((doc) => {
    console.log(doc);
    projectList.push({ ...doc.data(), id: doc.id });
  });
  //   console.log(bloc.exists() ? bloc.data() : "non");
  //   return bloc.exists() ? bloc.data() : {};

  return projectList;
};
