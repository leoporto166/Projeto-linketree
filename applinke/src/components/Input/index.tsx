import { type InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>   {}

export function Inputs(props: InputProps){
    return(
        <input
        className="bg-white px-2 h-9 rounded-md outline-none mb-3 text-black"
        {...props}
        />
    )
}