import { interfaceStore } from "../state/stores/interface.store"
import { useNavigate } from 'react-router-dom'

//tests
import { getName } from '@tauri-apps/api/app';


const Start = () => {

    const navigate = useNavigate();

    const { theme, changeTheme } = interfaceStore();


    //Sandbox
    


    return (
        <div className="w-full h-full bg-white dark:bg-zinc-900 dark:text-white">
            {theme} <br />
            <button onClick={changeTheme}>
                cambiar tema
            </button><br />
            <button onClick={() => navigate('/dashboard')}>
                To dashboard
            </button>
        </div>
    )
}

export default Start