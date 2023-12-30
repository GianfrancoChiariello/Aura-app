import { interfaceStore } from "../state/stores/interface.store"
import { useNavigate } from 'react-router-dom'
import { getVersion } from '@tauri-apps/api/app';

//tests

const Start = () => {
    const navigate = useNavigate();
    const { lang } = interfaceStore();


    const getVersionApp = async () => {
        return await getVersion();
    }


    return (
        <div className="w-full h-full bg-white dark:bg-zinc-900 dark:text-white">
            <p>pre actualizado {getVersionApp() as any}</p>
            <br /><br />
            <button onClick={() => navigate('/dashboard')}>
                To dashboard {lang}
            </button><br /><br />
        </div>
    )
}

export default Start