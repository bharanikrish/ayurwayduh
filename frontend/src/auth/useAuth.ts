import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export function useAuth() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        return onAuthStateChanged(auth, async (firebaseUser) => {
            if (!firebaseUser) return setUser(null);
            const token = await firebaseUser.getIdTokenResult();
            setUser({ ...firebaseUser, role: token.claims.role });
        });
    }, []);

    return user;
}