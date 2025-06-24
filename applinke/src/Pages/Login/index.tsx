import { Link } from "react-router-dom"

export function Login(){
    return(
        <div className="flex flex-col items-center justify-center w-full h-screen bg-linear-to-b to-black from-gray-600">
            <Link to={"/"}>
                <h1 className="mt-11 text-white mb-7 font-bold text-4xl md: text-5xl">
                    Dev
                    <span className="bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

        </div>
    )
}