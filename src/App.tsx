import {
  RouterProvider
} from "react-router-dom";
import { useEffect } from "react";
import CustonTitleBar from "./components/layout/CustomTitleBar";
import { interfaceStore } from "./state/stores/interface.store";
import { router } from "./router";
import { Suspense } from "react";
import Loading from "./pages/Loading";
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater';
import { relaunch } from '@tauri-apps/api/process';
import { Toaster, toast } from 'sonner';

function App() {

  const { theme } = interfaceStore();

  const startInstall = async (newVersion: String) => {
    console.log(newVersion);

    try {
      const update = await installUpdate();
      console.log(update);
      toast.promise(update as any, {
        loading: `Installing update v${newVersion} - ${Date.now().toLocaleString()}`,
        success: () => {
          relaunch();
          return `Successfully updated v${newVersion}`
        }
      })
    } catch (error) {
      toast.error(error as string)
    }
  }


  useEffect(() => {
    checkUpdate().then(({ shouldUpdate, manifest }) => {
      console.log(`update?: ${shouldUpdate}`);
      console.log(manifest);
      
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
