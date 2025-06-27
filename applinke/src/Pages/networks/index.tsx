
import { useState, type FormEvent } from "react"
import { Header } from "../../components/Header"
import { Inputs } from "../../components/Input"
import { db } from "../../services/firebaseconnection"
import { addDoc,
        getDoc,
        setDoc,
        doc
} from "firebase/firestore"



export function NetWorks(){

    const [urlX, setUrlX] = useState("")
    const [urlFace, setUrlFace] = useState("")
    const [urlInsta, setUrlInsta] = useState("")
    async function handleSave(event: FormEvent){
        event.preventDefault();

        await setDoc(doc(db, "linkSocial", "link"), {
            facebook: urlFace,
            x: urlX,
            instagram: urlInsta
        })

        .then(() => {
            console.log("Cadastrados")
        })
        .catch((error) => {
            console.log(`Erro ${error}`)
        })

        setUrlX("");
        setUrlFace("");
        setUrlInsta("");

    }
    return(
        <div className="flex flex-col items-center w-full h-screen bg-linear-to-b to-black from-gray-600">
            <Header></Header>

            <h1 className="font-bold text-4xl text-white mt-8">Suas Redes Sociais</h1>

            <form className="flex flex-col w-11/12 max-w-xl" onSubmit={handleSave}>
                
                    <label className="text-white font-semibold mt-4 mb-1">Url do X:</label>
                    <Inputs
                    placeholder="X.com/..."
                    value={urlX}
                    onChange={(e) => setUrlX(e.target.value)}
                    type="url"
                    
                    />

                    <label className="text-white font-semibold mt-4 mb-1">Url do Facebook:</label>
                    <Inputs
                    placeholder="https://web.facebook.com//..."
                    value={urlFace}
                    onChange={(e) => setUrlFace(e.target.value)}
                    type="url"
                    />

                    <label className="text-white font-semibold mt-4 mb-1">Url do Instagram:</label>
                    <Inputs
                    placeholder="instagram.com/..."
                    value={urlInsta}
                    onChange={(e) => setUrlInsta(e.target.value)}
                    type="url"
                    />

                    <button className="bg-green-600 mt-5 h-10 rounded-md text-white font-bold cursor-pointer">Salvar Links</button>

            </form>

        </div>
    )
}