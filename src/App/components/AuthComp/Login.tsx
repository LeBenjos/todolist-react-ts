// Libraries
import React, { useState } from "react";

// Firebase
import { User, signInWithEmailAndPassword } from "firebase/auth";

// Context
import { auth } from "../../context/firebase";

//Constants
import { ErrorMessage } from "../../constants/ErrorMessage";

export default function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(error) setError("")
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(error) setError("")
    setPassword(e.target.value);
  };

  const login = (e: React.MouseEvent) => {
    if (!email || !password) {
      setError(ErrorMessage.AUTH_INVALID_INPUT);
      return;
    }

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: User = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        let message: string;
        switch(errorCode){
          case "auth/invalid-email":
            message = ErrorMessage.AUTH_INVALID_EMAIL
            break;
          case "auth/invalid-email":
            message = ErrorMessage.AUTH_INVALID_EMAIL
            break;
          default:
            message = ErrorMessage.AUTH_DEFAULT_MESSAGE
            break;
        }
        setError(message)
      });
  };

  return <>
    <form className="Auth">
      <p className="error-p">{error}</p>
      <div className="input-container">
        <label htmlFor="email">Adresse mail</label>
        <input
          className={error ? "error-input" : ""}
          id="email"
          name="email"
          type="email"
          onChange={handleEmail}
          value={email}
          placeholder="Adresse mail"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Mot de passe</label>
        <input
          className={error ? "error-input" : ""}
          id="password"
          name="password"
          type="password"
          onChange={handlePassword}
          value={password}
          placeholder="Mot de passe"
          required
        />
      </div>
      <button type="submit" onClick={login}>Connexion</button>
    </form>
  </>
}
