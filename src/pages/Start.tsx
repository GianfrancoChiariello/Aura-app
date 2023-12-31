import { interfaceStore } from "../state/stores/interface.store"
import { useNavigate } from 'react-router-dom'
import { getVersion } from '@tauri-apps/api/app';
import { useState, useEffect } from "react";

//tests

const Start = () => {
    const navigate = useNavigate();
    const { lang } = interfaceStore();
    const [version, setVersion] = useState("")

    const getVersionApp = async () => {
        const version = await getVersion();
        setVersion(version)
    }

    useEffect(() => {
        getVersionApp()
    }, [])



    return (
        <div className="w-full h-full bg-white dark:bg-zinc-900 dark:text-white">
            <p>pre actualizado {version}</p>
            <br /><br />
            <button onClick={() => navigate('/dashboard')}>
                To dashboard {lang}
            </button><br /><br />
        </div>
    )
}

export default Start