
import { type ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../services/firebaseconnection";

interface PrivateProps {
    children: ReactNode;
}

export function Private({children}: PrivateProps): any {

    const [loding, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user){
                const userData = {
                    uid: user?.uid,
                    email: user?.email,
                }

                localStorage.setItem("33reactlink", JSON.stringify(userData))
                setLoading(false)
                setSigned(true)
            } else {
                setLoading(false)
                setSigned(false)
            }
        })
    }, [])

    if(loding){
        return <div  className="flex w-full h-screen bg-linear-to-b to-black from-gray-600 items-center justify-start py-4 flex-col"></div>
    }

    if(!signed){
       return <Navigate to={"/login"}></Navigate>
    }

    return children;


}