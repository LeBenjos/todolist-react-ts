// Librairies
import React, { useState } from "react";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";

// Context
import { auth } from "../../context/firebase";

//Constants
import { ErrorMessage } from "../../constants/messages/ErrorMessage";
import { TextAuth } from "../../constants/texts/TextAuth";
import Logo from "./Logo";

export default function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("")
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("")
    setPassword(e.target.value);
  };

  const login = (e: React.MouseEvent) => {
    if (!email || !password) {
      setError(ErrorMessage.AUTH_INVALID_INPUT);
      return;
    }

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then()
      .catch((error) => {
        const errorCode = error.code;
        let message: string;
        switch (errorCode) {
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
      <Logo />
      <p className="error-p">{error}</p>
      <div className="input-container">
        <label htmlFor="email">{TextAuth.LABEL_EMAIL}</label>
        <input
          className={error ? "error-input" : ""}
          id="email"
          name="email"
          type="email"
          onChange={handleEmail}
          value={email}
          placeholder={TextAuth.PLACEHOLDER_EMAIL}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">{TextAuth.LABEL_PASSWORD}</label>
        <input
          className={error ? "error-input" : ""}
          id="password"
          name="password"
          type="password"
          onChange={handlePassword}
          value={password}
          placeholder={TextAuth.PLACEHOLDER_PASSWORD}
          required
        />
      </div>
      <button type="submit" onClick={login}>{TextAuth.BUTTON_LOGIN}</button>
    </form>
  </>
}
