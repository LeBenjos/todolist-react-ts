// Librairies
import { useState } from "react";

// Services
import { createUser } from "../../services/register.service";

// Constants
import { ErrorMessage } from "../../constants/messages/ErrorMessage";
import { SuccessMessage } from "../../constants/messages/SuccessMessage";
import { TextAuth } from "../../constants/texts/TextAuth";

// Styles
import "./Auth.css";
import Logo from "./Logo";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegistration = async (e: any) => {
    if (!email || !password || !username) {
      setError(ErrorMessage.AUTH_INVALID_INPUT);
      return;
    }

    e.preventDefault();

    const createState = await createUser({
      email,
      password,
      username,
    });

    createState
      ? handleError(createState)
      : handleSuccess(SuccessMessage.AUTH_REGISTER_SUCCESS);
  };

  const handleError = (text: string) => {
    setSuccess("");
    setError(text);
  };

  const handleSuccess = (text: string) => {
    setError("");
    setEmail("");
    setPassword("");
    setUsername("");
    setSuccess(text);
  };

  return (
    <form className="Auth" action="">
      <Logo />
      <p className="error-p">{error}</p>
      <p className="success-input">{success}</p>
      <div className="input-container">
        <label htmlFor="name">{TextAuth.LABEL_USERNAME}</label>
        <input
          required
          className={error ? "error-input" : ""}
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={(e) => {
            setError("");
            setUsername(e.target.value);
          }}
          placeholder={TextAuth.PLACEHOLDER_USERNAME}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">{TextAuth.LABEL_EMAIL}</label>
        <input
          required
          className={error ? "error-input" : ""}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setError("");
            setEmail(e.target.value);
          }}
          placeholder={TextAuth.PLACEHOLDER_EMAIL}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">{TextAuth.LABEL_PASSWORD}</label>
        <input
          required
          className={error ? "error-input" : ""}
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setError("");
            setPassword(e.target.value);
          }}
          placeholder={TextAuth.PLACEHOLDER_PASSWORD}
        />
      </div>

      <button onClick={handleRegistration} type="submit">{TextAuth.BUTTON_REGISTER}</button>
    </form>
  );
}
