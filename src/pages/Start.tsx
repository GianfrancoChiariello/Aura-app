import { interfaceStore } from "../state/stores/interface.store"
import { useNavigate } from 'react-router-dom'

//tests

const Start = () => {
    const navigate = useNavigate();
    const { lang } = interfaceStore();

    return (
        <div className="w-full h-full bg-white dark:bg-zinc-900 dark:text-white">
            <p>pre actualizado v1.9</p>
            <br /><br />
            <button onClick={() => navigate('/dashboard')}>
                To dashboard {lang}
            </button><br /><br />
        </div>
    )
}

export default Start