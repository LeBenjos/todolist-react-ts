import { CreateUserInterface } from "../models/user.model";
import { setDoc, addDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../context/firebase";

export const createUser = async (
  createUserCredentials: CreateUserInterface
) => {
  await createUserWithEmailAndPassword(
    auth,
    createUserCredentials.email,
    createUserCredentials.password
  );

  const userDoc = doc(db, "users", createUserCredentials.email);
  await setDoc(userDoc, { ...createUserCredentials });
};
