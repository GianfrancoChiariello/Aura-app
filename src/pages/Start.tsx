import { interfaceStore } from "../state/stores/interface.store"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

//tests

const Start = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const { theme, changeTheme,changeLang, lang } = interfaceStore();

    //Sandbox

    return (
        <div className="w-full h-full bg-white dark:bg-zinc-900 dark:text-white">
            <p>actualizado v3</p>
            {theme} <br />
            <button onClick={() => changeTheme()}>
                {t('test')}
            </button><br />
            <button onClick={() => navigate('/dashboard')}>
                To dashboard {lang}
            </button><br/>
            <button onClick={() => i18n.changeLanguage('pt-PT')}>
                change lang to PT
            </button><br/>
            <button onClick={() => changeLang('pt-PT')}>
                change lang to PT
            </button><br/>
            <button onClick={() => changeLang('en-EN')}>
                change lang to EN
            </button>
        </div>
    )
}

export default Start