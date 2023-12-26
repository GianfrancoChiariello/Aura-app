import {
    createBrowserRouter,
} from "react-router-dom";
import Start from "../pages/Start";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/layout/Sidebar";
import Settings from "../pages/Settings";

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
    }
]);

export default router