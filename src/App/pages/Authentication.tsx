// Libraries
import { useState } from "react";

// Components
import LogIn from "../components/AuthComp/Login.tsx";
import Register from "../components/AuthComp/Register.tsx";

export default function Authentication() {
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  return (
    <>
      {hasAccount ? <LogIn /> : <Register />}
      <button onClick={() => setHasAccount(!hasAccount)}>
        {hasAccount ? <>GO TO Reister</> : <>GO TO LogIn</>}
      </button>
    </>
  );
}
