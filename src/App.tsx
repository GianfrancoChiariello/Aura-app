import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Start from "./pages/Start";
import CustonTitleBar from "./components/layout/CustomTitleBar";
import { interfaceStore } from "./state/stores/interface.store";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/layout/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/dashboard",
    element: <Sidebar><Dashboard /></Sidebar>,
  },
]);

function App() {

  const {theme} = interfaceStore();

  return (
      <div className={`${theme == 'dark' && 'dark'} w-full h-screen grid grid-rows-[24px_minmax(24px,_1fr)]`}>
        <CustonTitleBar />
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
