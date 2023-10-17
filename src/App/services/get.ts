import { doc, getDoc } from "firebase/firestore";
import { db } from "../context/firebase";

export const get = async (userId: string) => {
  const queryRef = doc(db, "users", userId);
  const bloc = await getDoc(queryRef);

  console.log(bloc.exists() ? bloc.data() : "non");
  return bloc.exists() ? bloc.data() : {};
};
