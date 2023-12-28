import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { locale } from '@tauri-apps/api/os';
import { getTheme } from '../../utils/tauri.tools';
import i18n from "i18next";


interface interfaceType {
    theme: Promise<String | null> | String,
    sideBar: String,
    lang: Promise<String | null> | String,
    changeTheme: () => void,
    changeSize: () => void,
    changeLang: (param? : string) => void,
}

const Systemlocale =  locale();
const SystemTheme =  getTheme()

export const interfaceStore = create(
    persist<interfaceType>((set, get) => ({
        theme: SystemTheme,
        lang: Systemlocale,
        sideBar: '80px',
        changeTheme: () => {
            set({ theme: get().theme == 'dark' ? 'light' : 'dark' })
        },
        changeSize: () => {
            set({ sideBar: get().sideBar == '80px' ? '250px' : '80px' })
        },
        changeLang: (param) => {
            i18n.changeLanguage(param)
            set({ lang: param })
        },
    }), { name: 'interface' })
)