import React from "react";
import "./Auth.css";

export default function Register() {
  return (
    <form>
      <div className="input-container">
        <label htmlFor="name">Nom d'utilisateur</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="input-container">
        <label htmlFor="email">Adresse mail</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" id="password" />
      </div>

      <button>S'inscrire</button>
    </form>
  );
}
