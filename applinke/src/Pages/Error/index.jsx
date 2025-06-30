
import { Link } from "react-router-dom"

export function Error(){

    return(
        <div className=" flex w-full h-screen bg-linear-to-b to-black from-gray-600 items-center py-4 flex-col justify-center text-white">

            <h1 className="text-6xl mb-2">ERROR 404</h1>
            <span className="text-xl">Não foi possivel encontrar essa página</span>
            <Link to={"/"} className="text-black bg-green-300 px-2 rounded-md  text-[20px] mt-[10px]">
            Voltar a Home
            </Link>
        </div>
    )
    
}