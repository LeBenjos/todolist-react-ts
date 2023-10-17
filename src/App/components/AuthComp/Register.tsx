import React, { useState } from "react";
import { createUser } from "../../services/register.service";
import "./Auth.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState(false);

  const handleRegistration = async (e: any) => {
    if (!email || !password || !username) {
      setError(true);
      return;
    }

    e.preventDefault();

    await createUser({
      email,
      password,
      username,
    });
  };

  return (
    <form className="Auth" action="">
      <div className="input-container">
        <label htmlFor="name">Nom d'utilisateur</label>
        <input
          className={error ? "error-input" : ""}
          required
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={(e) => {
            setError(false);
            setUsername(e.target.value);
          }}
          placeholder="Nom d'utilisateur"
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Adresse mail</label>
        <input
          className={error ? "error-input" : ""}
          required
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setError(false);
            setEmail(e.target.value);
          }}
          placeholder="Adresse mail"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Mot de passe</label>
        <input
          className={error ? "error-input" : ""}
          required
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setError(false);
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
