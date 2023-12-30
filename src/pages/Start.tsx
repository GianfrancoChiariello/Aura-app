import { interfaceStore } from "../state/stores/interface.store"
import { useNavigate } from 'react-router-dom'
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";
import { useEffect, useState } from "react";

//tests

const Start = () => {
    const navigate = useNavigate();
    const { lang } = interfaceStore();
    const [textUpdate, setTextUpdate] = useState("")
    const [recentUpdate, setRecentUpdate] = useState("")
    const [version, setVersion] = useState("")

    //Sandbox
    function startInstall(newVersion: any) {
        setTextUpdate(`Installin update ${newVersion}, Will relaunch afterwards`)
        installUpdate().then(relaunch);
    }

    useEffect(() => {
        checkUpdate().then(({ shouldUpdate, manifest }: any) => {
            if (shouldUpdate) {
                alert("should update!")
                const { version, body } = manifest;
                setVersion(version)
                setRecentUpdate(`v${version} y ${body}`)
            }
        });
    }, []);

    return (
        <div className="w-full h-full bg-white dark:bg-zinc-900 dark:text-white">
            <p>actualizado v {version}</p>
            <br /><br />
            <button onClick={() => navigate('/dashboard')}>
                To dashboard {lang}
            </button><br /><br />

            <h1>{textUpdate}</h1><br />



            <div>
                <h2>Hay updates?: {recentUpdate}</h2>
                <button onClick={() => startInstall(version)}>
                    Start install
                </button>
            </div>
        </div>
    )
}

export default Start