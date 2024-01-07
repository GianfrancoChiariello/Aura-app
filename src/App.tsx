import {
  RouterProvider
} from "react-router-dom";
import { useEffect } from "react";
import CustonTitleBar from "./components/layout/CustomTitleBar";
import { interfaceStore } from "./state/stores/interface.store";
import { router } from "./router";
import { Suspense } from "react";
import Loading from "./pages/Loading";
import { checkUpdate } from '@tauri-apps/api/updater';
import { Toaster, toast } from 'sonner';
import { startInstall } from "./utils/tauri.tools";

function App() {

  const { theme } = interfaceStore();

  useEffect(() => {
    checkUpdate().then(({ shouldUpdate, manifest }) => {
      console.log(`update?: ${shouldUpdate} --> manifest: { version: ${manifest?.version}, body: ${manifest?.body} }`);
      
      if (shouldUpdate) {
        toast.info(`${manifest?.body} - ${manifest?.version}`, {
          action: {
            label: 'Ok',
            onClick: () => startInstall(manifest?.version as String)
          }
        })
      }
    });
  }, []);

  return (
    <div className={`${theme == 'dark' && 'dark'} w-full h-screen grid grid-rows-[32px_minmax(32px,_1fr)]`}>
      <CustonTitleBar />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;
