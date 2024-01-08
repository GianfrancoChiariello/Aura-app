import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';
import Sidebar from "./components/layout/Sidebar";
import Settings from "./pages/Settings";

const Start = lazy(() => import('./pages/Start'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Projects = lazy(() => import('./pages/Projects'))
const NotFound = lazy(() => import('./pages/404'))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Start/>,
    },
    {
        path: "/dashboard",
        element: <Sidebar><Dashboard /></Sidebar >,
    },
    {
        path: "/settings",
        element: <Sidebar><Settings/></Sidebar >
    },
    {
        path: "/projects",
        element: <Sidebar><Projects/></Sidebar>
    },
    {
        path: "*",
        element: <Sidebar><NotFound/></Sidebar >
    }
]);