import { useState } from 'react';
import { auth } from '../config/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    }
    return (
        <div>
            <input placeholder="Email..." onInput={e => setEmail(e.target.value)} />
            <input placeholder="Password..." onInput={e => setPassword(e.target.value)} />
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}

export default Auth;