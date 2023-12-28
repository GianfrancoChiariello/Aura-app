import {
  RouterProvider
} from "react-router-dom";
import CustonTitleBar from "./components/layout/CustomTitleBar";
import { interfaceStore } from "./state/stores/interface.store";
import {
  createBrowserRouter,
} from "react-router-dom";
import Start from "./pages/Start";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/layout/Sidebar";
import Settings from "./pages/Settings";
import NotFound from "./pages/404";
import { locale } from '@tauri-apps/api/os';
import { getTheme } from "./utils/tauri.tools";
import { useEffect } from "react";

function App() {

  const { theme,changeTheme, changeLang } = interfaceStore();

  useEffect(() => {
    const localStore = localStorage.getItem("interface");

    async function initial() {
      let theme = await getTheme()
      let lang = await locale()

      changeTheme(theme);
      changeLang(lang!)
    }

    !localStore && initial();
  },[])

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

  return (
    <div className={`${theme == 'dark' && 'dark'} w-full h-screen grid grid-rows-[32px_minmax(32px,_1fr)]`}>
      <CustonTitleBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
