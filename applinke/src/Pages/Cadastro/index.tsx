import { Link } from "react-router-dom"
import {Inputs} from "../../components/Input"
import { useState, type FormEvent } from "react"
import {auth} from "../../services/firebaseconnection"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"


export function Cadastro(){
    const navigate = useNavigate();

    const [inputEmail, setInputEmail] = useState("")
    const [inputSenha, setInputSenha] = useState("")
    const [inputNome, setInputNome] = useState("")

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        
        if(inputEmail === "" || inputSenha === ""){
            alert("Preencha os dados necessarios")
        }

        await createUserWithEmailAndPassword (auth, inputEmail, inputSenha)

        .then((value) => {
            console.log(value.user);
            setInputEmail("");
            setInputSenha("");
            setInputNome("");
            navigate("/adm")
            
        })
        .catch((error) => {
            if(error.code === "auth/weak-password"){
                alert("Senha fraca")
            } else if(error.code === "auth/email-already-in-use"){
                alert("Email já existe!")
            }
        })
        
    }

    return(
        <div className="flex flex-col items-center justify-center w-full h-screen bg-linear-to-b to-black from-gray-600">
            <Link to={"/"}>
                <h1 className="mt-11 text-white mb-7 font-bold text-4xl md: text-5xl">
                    Dev
                    <span className="bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-xl px-2">

                <Inputs 
                placeholder="Digite seu nome.."
                type="text"
                value={inputNome}
                onChange={(e) => setInputNome(e.target.value)}
                required
                />

                <Inputs 
                placeholder="Digite seu email..."
                type="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                required
                />
            
                <Inputs
                placeholder="********"
                type="password"
                value={inputSenha}
                onChange={(e) => setInputSenha(e.target.value)} 
                minLength={8}
                required
                />
                

                <button className="bg-blue-600 h-9 rounded-lg text-white cursor-pointer" type="submit">Criar</button>
            </form>
                <span className="text-white mt-1.5" >Já tem uma conta?<Link to={"/login"} className="underline ml-1"> Acessar</Link></span>

        </div>
    )
}