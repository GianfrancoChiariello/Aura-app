import { interfaceStore } from "../state/stores/interface.store"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";


//tests

const Start = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const { theme, changeTheme } = interfaceStore();


    //Sandbox


    return (
        <div className="w-full h-full bg-white dark:bg-zinc-900 dark:text-white">
            {theme} <br />
            <button onClick={() => changeTheme()}>
                {t('test')}
            </button><br />
            <button onClick={() => navigate('/dashboard')}>
                To dashboard
            </button><br/>
            <button onClick={() => i18n.changeLanguage('pt')}>
                change lang to es
            </button>
        </div>
    )
}

export default Start