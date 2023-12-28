import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {interfaceStore} from './state/stores/interface.store';

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: true,
        lng: interfaceStore.getState().lang,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n