import { createContext, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const authContext = createContext<User | undefined>(undefined)

export default function Auth({children}: {children: JSX.Element}): JSX.Element{
    const [currentAuth, setCurrentAuth] = useState<User>();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setCurrentAuth(user)
            } else {
                setCurrentAuth(undefined)
            }
        })
    }, [])

    return <authContext.Provider value={currentAuth}>
        {children}
    </authContext.Provider>
}
