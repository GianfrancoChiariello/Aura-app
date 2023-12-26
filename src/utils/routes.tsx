import {
    createBrowserRouter,
} from "react-router-dom";
import Start from "../pages/Start";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/layout/Sidebar";
import Settings from "../pages/Settings";
import NotFound from "../pages/404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Start />,
    },
    {
        path: "/dashboard",
        element: <Sidebar><Dashboard /></Sidebar>,
    },
    {
        path: "/settings",
        element: <Sidebar><Settings/></Sidebar>
    },
    {
        path: "*",
        element: <Sidebar><NotFound/></Sidebar>
    }
]);

export default router