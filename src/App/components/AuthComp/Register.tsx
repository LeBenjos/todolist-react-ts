import React, { useState } from "react";
import { createUser } from "../../services/register.service";
import "./Auth.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegistration = async (e: any) => {
    e.preventDefault();

    await createUser({
      email,
      password,
      username,
    });
  };

  return (
    <form className="Register">
      <div className="input-container">
        <label htmlFor="name">Nom d'utilisateur</label>
        <input
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Adresse mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <button onClick={handleRegistration} type="submit">
        S'inscrire
      </button>
    </form>
  );
}
