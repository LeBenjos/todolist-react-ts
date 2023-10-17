// Libraries
import React, { useState } from "react";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";

// Context
import { auth } from "../../context/firebase";

export default function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = (e: React.MouseEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <form>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleEmail} value={email} required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handlePassword} value={password} required />
        </div>
        <input type="submit" value="LogIn" onClick={login} />
      </form>
    </>
  );
}
