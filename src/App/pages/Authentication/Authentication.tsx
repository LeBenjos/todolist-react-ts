// Libraries
import { useState } from "react";

// Components
import LogIn from "../../components/AuthComp/Login.tsx";
import Register from "../../components/AuthComp/Register.tsx";

// Style
import "./Authentication.css";

export default function Authentication() {
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  return (
    <div className="AuthContainer">
      {hasAccount ? <LogIn /> : <Register />}

      <button className="span-link" onClick={() => setHasAccount(!hasAccount)}>
        {hasAccount
          ? "Besoin de créer un compte ?"
          : "Besoin de se connecter ?"}
      </button>
    </div>
  );
}
