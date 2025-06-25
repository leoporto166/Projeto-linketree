import { createBrowserRouter } from "react-router-dom";
import {Admin} from "./Pages/admin";
import {Home} from "./Pages/Home";
import { Cadastro } from "./Pages/Cadastro";
import { NetWorks } from "./Pages/networks";
import { Login } from "./Pages/Login"
import { Private } from "./routes/Private"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    },
    {
        path: "/adm/social",
        element: <NetWorks />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/adm",
        element: <Private><Admin /></Private>
    }


])

export {router}