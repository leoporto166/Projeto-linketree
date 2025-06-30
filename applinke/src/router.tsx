import { createHashRouter } from "react-router-dom";
import {Admin} from "./Pages/admin";
import {Home} from "./Pages/Home";
import { Cadastro } from "./Pages/Cadastro";
import { NetWorks } from "./Pages/networks";
import { Login } from "./Pages/Login"
import { Private } from "./routes/Private"
import { Error } from "./Pages/Error"

const router = createHashRouter([
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
        element: <Private><NetWorks /></Private>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/adm",
        element: <Private><Admin /></Private>
    },
    {
        path: "*",
        element: <Error />
    }


])

export {router}