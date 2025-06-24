import { createBrowserRouter } from "react-router-dom";
import {Admin} from "./Pages/admin/index";
import {Home} from "./Pages/Home/index";
import {Login} from "./Pages/Login/index";
import { NetWorks } from "./Pages/networks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/link",
        element: <Admin />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/adm",
        element: <NetWorks />
    },


])

export {router}