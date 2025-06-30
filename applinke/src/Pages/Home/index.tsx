import { Social } from "../../components/Social"
import { useState, useEffect } from "react"

import { FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa"
import { db } from "../../services/firebaseconnection"

import { 
    getDocs,
    getDoc,
    query,
    collection,
    doc,
    orderBy,

 } from "firebase/firestore"

 interface LinkProps{
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
}

interface SocialLinksProps{
    facebook: string;
    x: string;
    instagram: string;
}

export function Home(){

    const [links, setLinks] = useState<LinkProps[]>([])
    const [social, setSocial] = useState<SocialLinksProps>()

    useEffect(() => {

        function loadLinks(){
            const linksRef = collection(db, "links")
            const queryRef = query(linksRef, orderBy("created", "asc"))
            getDocs(queryRef)

            .then((snapshot) => {

                let lista = [] as LinkProps[];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url,
                        bg: doc.data().bg,
                        color: doc.data().color,
                    })
                })

                setLinks(lista)
            })

        }

        loadLinks()
    }, [])

    useEffect(() => {
        function loadSocialLinks(){

            const docRef = doc(db, "linkSocial", "link")
            getDoc(docRef)

            .then((snapshot) => {
                if(snapshot !== undefined){

                    setSocial({
                        facebook: snapshot.data()?.facebook,
                        x: snapshot.data()?.x,
                        instagram: snapshot.data()?.instagram,
                    })

                }
            })
            
        }

        loadSocialLinks()
    }, [])

    return(
        <div className=" flex w-full h-screen bg-linear-to-b to-black from-gray-600 items-center justify-start py-4 flex-col">
            <h1 className="md:text-5xl text-4xl text-white mt-20 font-bold">Leonardo</h1>
            <span className="text-white mt-4 text-xl">Veja meus links 👇</span>

            <main className="flex flex-col w-11/12 max-width-xl mt-5 text-center">

                {links.map((link) => (
                    <section key={link.id} className=" mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
                    style={{background: link.bg}} 
                    >
                    <a href={link.url} target="_blank">
                        <p className="text-base md:text-lg" 
                        style={{color: link.color}}
                        >
                            {link.name}
                        </p>
                    </a>

                    
                </section>
                ))}

                {social && Object.keys(social).length > 0 && (

                    <footer className="flex justify-center gap-3 my-4">
                        <Social url={social?.instagram}>
                            <FaInstagram size={35} color="#FFF"></FaInstagram>
                        </Social>

                        <Social url={social?.facebook}>
                            <FaFacebook size={35} color="#FFF"></FaFacebook>
                        </Social>

                        <Social url={social?.x}>
                            <FaTwitter size={35} color="#FFF"></FaTwitter>
                        </Social>
                    </footer>

                )}



            </main>

            
        </div>
    )
}