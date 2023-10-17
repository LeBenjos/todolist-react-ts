import { CreateUserInterface } from "../models/user.model";
import { setDoc, addDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../context/firebase";

export const createUser = async (
  createUserCredentials: CreateUserInterface
) => {
  return await createUserWithEmailAndPassword(
    auth,
    createUserCredentials.email,
    createUserCredentials.password
  )
    .then((response) => {
      const userDoc = doc(
        db,
        "users",
        response.user.email || createUserCredentials.email
      );

      setDoc(userDoc, {
        email: createUserCredentials.email,
        username: createUserCredentials.username,
      });

      return null;
    })
    .catch((err) => {
      const message = err.code as string;
      return message.split("/")[1].split("-").join(" ");
    });
};
