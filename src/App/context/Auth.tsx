// Librairies
import { createContext, useEffect, useState } from "react";

// Firebase
import { User, onAuthStateChanged } from "firebase/auth";

// Context
import { auth } from "./firebase.tsx";
    
export const authContext = createContext<User | undefined>(undefined);

export default function Auth({children}: {children: any}): JSX.Element{
    const localContext = localStorage.getItem("context");
    const context: User | undefined = localContext ? JSON.parse(localContext) as User : undefined;
    const [currentAuth, setCurrentAuth] = useState<User | undefined>(context);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                localStorage.setItem("context", JSON.stringify(user));
                setCurrentAuth(user);
            } else {
                localStorage.removeItem("context");
                setCurrentAuth(undefined);
            }
        })
    }, [])

    return <authContext.Provider value={ currentAuth }>
        { children }
    </authContext.Provider>
}
