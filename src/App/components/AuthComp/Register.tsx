import React, { useState } from "react";
import { createUser } from "../../services/register.service";
import "./Auth.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegistration = async (e: any) => {
    if (!email || !password || !username) {
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
      : handleSuccess("Compte crée avec succ");
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
      <p className="error-input">{error}</p>
      <p className="success-input">{success}</p>
      <div className="input-container">
        <label htmlFor="name">Nom d'utilisateur</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={(e) => {
            setError("");
            setUsername(e.target.value);
          }}
          placeholder="Nom d'utilisateur"
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Adresse mail</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setError("");
            setEmail(e.target.value);
          }}
          placeholder="Adresse mail"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Mot de passe</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setError("");
            setPassword(e.target.value);
          }}
          placeholder="Mot de passe"
        />
      </div>

      <button onClick={handleRegistration} type="submit">
        S'inscrire
      </button>
    </form>
  );
}
