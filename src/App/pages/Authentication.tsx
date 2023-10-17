// Libraries
import { useState } from "react"

// Components
import LogIn from "../components/Login.tsx"
import Register from "../components/Register.tsx"


export default function Authentication() {
    const [hasAccount, setHasAccount] = useState<boolean>(true)

    return <>
        {hasAccount ? 
            <LogIn /> :
            <Register />   
        }
        <button onClick={() => setHasAccount(!hasAccount)}>{hasAccount ? <>GO TO Register</> : <>GO TO LogIn</>}</button>
    </>
}
