import { Social } from "../../components/Social"

import { FaInstagram} from "react-icons/fa"

export function Home(){

    return(
        <div className=" flex w-full h-screen bg-linear-to-b to-black from-gray-600 items-center justify-start py-4 flex-col">
            <h1 className="md:text-5xl text-4xl text-white mt-20 font-bold">Leonardo</h1>
            <span className="text-white mt-4 text-xl">Veja meus links 👇</span>

            <main className="flex flex-col w-11/12 max-width-xl mt-5 text-center">

                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer" >
                    <a >
                        <p className="text-base md:text-lg" >
                            Projeto 1
                        </p>
                    </a>
                </section>

                <footer className="flex justify-center gap-3 my-4">
                    <Social url="https://www.instagram.com/leoportozz/">
                        <FaInstagram size={35} color="#FFF"></FaInstagram>
                    </Social>
                </footer>



            </main>

            
        </div>
    )
}