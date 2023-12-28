import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import {interfaceStore} from './state/stores/interface.store';

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: true,
        lng: interfaceStore.getState().lang as string,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n