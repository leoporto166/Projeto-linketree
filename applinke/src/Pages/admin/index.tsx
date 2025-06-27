
import { useState, type FormEvent, useEffect } from "react"
import { Header } from "../../components/Header"
import { Inputs } from "../../components/Input"
import { FiTrash } from "react-icons/fi"
import { db } from "../../services/firebaseconnection"
import { 
    addDoc, 
    collection, 
    onSnapshot, 
    query, 
    orderBy,
    doc, 
    deleteDoc 
} from "firebase/firestore"
import { Link } from "react-router-dom"

interface LinkProps{
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
}

export function Admin(){

    const [nomeInput, setNomeInput] = useState("")
    const [urlInput, setUrlInput] = useState("")

    const [corInput, setCorInput] = useState("#ffffff")
    const [fundoInput, setFundoInput] = useState
("#000000")

    const [links, setLinks] = useState<LinkProps[]>([])
    
    useEffect(() => {
        const linksRef = collection(db, "links");
        const queryRef = query(linksRef, orderBy("created", "asc"));

        const unsub = onSnapshot(queryRef, (snapshot) =>{
            let lista = [] as LinkProps[];

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color


                })
            })

            setLinks(lista)

        })


        return () => {
            unsub();
        }


    }, [])
    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        await addDoc(collection(db, "links"), {
            name: nomeInput,
            url: urlInput,
            bg: fundoInput,
            color: corInput,
            created: new Date()
        })

        .then(() => {
            console.log("Cadastrado com sucesso")
        })
        .catch((error) => {
            console.log(`Erro ao cadastrar no banco ${error}`)
            return
        })

        setNomeInput("");
        setUrlInput("");

        
        
    }

    async function handleDelete(id: string) {
        const docRef = doc(db, "links", id)
        deleteDoc(docRef)
    }

    
    return(
        <div className="bg-linear-to-b to-black from-gray-600 w-full min-h-screen flex flex-col items-center" onSubmit={handleRegister} >
            <Header></Header>
                <main className="w-full max-w-xl px-2 flex flex-col items-center">
                    <form className="flex flex-col text-white w-xl mt-5">
                        <label className="mb-2">Nome do link</label>
                        <Inputs
                        placeholder="Nome do Link"
                        required
                        value={nomeInput}
                        onChange={(e) => setNomeInput(e.target.value)}
                        />

                        <label className="mb-2">URL do link</label>
                        <Inputs
                        type="url"
                        placeholder="Digite o link..."
                        required
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        />

                        <section className="flex my-4 gap-5">
                            <div className="flex gap-4 items-center">
                                <label className="mb-2">Fundo do Link</label>
                                <Inputs 
                                type="color"
                                value={corInput}
                                onChange={(e) => setCorInput(e.target.value)}

                                />
                            
                                <label className="mb-2">Cor do Link</label>
                                <Inputs
                                type="color"
                                value={fundoInput}
                                onChange={(e) => setFundoInput(e.target.value)}
                                />
                            
                            </div>
                            
                        </section>


                        {nomeInput.length !== 0 && (

                            <div className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">

                                <label className="mb-3">Veja como está ficando</label>

                                <article className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-green-900 rounded px-1 py-3"
                                style={{marginBottom: 8, marginTop: 8, backgroundColor: fundoInput}}>
                                    <p style={{color: corInput}}>{nomeInput}</p>
                                </article>

                            </div>

                        )
                        }

                        <button className="bg-green-500 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center mb-7 cursor-pointer"
                        type="submit">
                            Cadastrar
                        </button>
                        
                    </form>

                    <h2 className="font-bold text-4xl text-white">Meus Links</h2>

                    

                    {links.map((link) => (
                        <article 
                            className="flex items-center justify-between w-11/12 max-w-xl h-10 rounded-md py-3 px-2 my-4 select-none cursor-pointer"
                            style={{backgroundColor: link.bg, color: link.color}}
                            >
                        <Link to= {link.url} className="flex items-center justify-between w-11/12 max-w-xl h-10 rounded-md py-3 px-2 my-4 select-none cursor-pointer" key={link.id}
                        target="blank">
                            
                                <p>{link.name}</p>
                                
                        </Link>
                                <div>
                                    <button className="border border-dashed p-1 roundend bg-neutral-900 cursor-pointer" onClick= {() => handleDelete(link.id)}>
                                        <FiTrash size={18} color="#fff"/>
                                    </button>
                                </div>
                        
                            </article>
                        
                        
                    ))}

                </main>

        </div>
    )
}