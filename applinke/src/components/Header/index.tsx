
import { Link } from "react-router-dom"
import { BiLogOut } from "react-icons/bi"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebaseconnection"

export function Header(){


    async function handleLogout(){
        await signOut(auth)
    }

    return(
        <header className=" max-w-3xl h-10 flex items-center mt-6  w-full px-2">
            <nav className="flex items-center justify-between w-full bg-white h-10 rounded-md p-2">
                <div className=" ml-2 flex gap-4 font-semibold">
                    <Link to={"/"}>
                        Home
                    </Link>
                    <Link to={"/adm"}>
                        Links
                    </Link>
                    <Link to={"/adm/social"}>
                        Redes Socias
                    </Link>
                </div>
                
                <button onClick={handleLogout} className="cursor-pointer">
                    <BiLogOut size={28} color="red"/>
                </button>
            </nav>

            
        </header>
    )
}