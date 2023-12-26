import {
  RouterProvider
} from "react-router-dom";
import CustonTitleBar from "./components/layout/CustomTitleBar";
import { interfaceStore } from "./state/stores/interface.store";
import router from "./utils/routes";


function App() {

  const { theme } = interfaceStore();

  return (
    <div className={`${theme == 'dark' && 'dark'} w-full h-screen grid grid-rows-[32px_minmax(32px,_1fr)]`}>
      <CustonTitleBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
