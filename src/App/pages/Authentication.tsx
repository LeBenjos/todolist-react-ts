// Libraries
import { useContext, useState } from "react";

// Components
import LogIn from "../components/AuthComp/Login.tsx";
import Register from "../components/AuthComp/Register.tsx";
import { authContext } from "../context/Auth.tsx";
import { Navigate } from "react-router-dom";
import { PagePath } from "../constants/paths/PagePath.ts";

export default function Authentication() {
  
  const user = useContext(authContext);
  
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  return (
    <>
      {user && <Navigate to={ PagePath.HOME } />}
      {hasAccount ? <LogIn /> : <Register />}
      <button onClick={() => setHasAccount(!hasAccount)}>
        {hasAccount ? <>GO TO Register</> : <>GO TO LogIn</>}
      </button>
    </>
  );
}
