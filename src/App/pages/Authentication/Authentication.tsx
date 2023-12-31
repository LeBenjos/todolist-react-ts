// Librairies
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

// Context
import { authContext } from "../../context/Auth.tsx";

// Constant
import { PagePath } from "../../constants/paths/PagePath.ts";
import { TextAuth } from "../../constants/texts/TextAuth.ts";

// Components
import LogIn from "../../components/AuthComp/Login.tsx";
import Register from "../../components/AuthComp/Register.tsx";

// Style
import "./Authentication.css";

export default function Authentication() {
  const user = useContext(authContext);
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  return <div className="AuthContainer">
    {user && <Navigate to={PagePath.HOME} />}
    {hasAccount ? <LogIn /> : <Register />}
    <button className="span-link" onClick={() => setHasAccount(!hasAccount)}>
      {hasAccount
        ? TextAuth.BUTTON_SWITCH_TO_REGISTER
        : TextAuth.BUTTON_SWITCH_TO_LOGIN}
    </button>
  </div>
}
