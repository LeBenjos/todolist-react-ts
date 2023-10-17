// Libraries
import React, { useState } from 'react'

// Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';

// Context
import { auth } from '../context/firebase';

export default function LogIn() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const login = (e: React.MouseEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    return <>
        <form action="">
            <input type="text" onChange={ handleEmail } value={ email } />
            <input type="text" onChange={ handlePassword } value={ password } />
            <input type="submit" value="LogIn" onClick={ login } />
        </form>
    </>
}
