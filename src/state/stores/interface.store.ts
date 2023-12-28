import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from "i18next";


interface interfaceType {
    theme: any,
    sideBar: String,
    lang: any,
    changeTheme: (param? : string) => void,
    changeSize: () => void,
    changeLang: (param? : string) => void,
}

export const interfaceStore = create(
    persist<interfaceType>((set, get) => ({
        theme: '',
        lang: '',
        sideBar: '80px',
        changeTheme: (param) => {
            set({ theme: param ? param : get().theme == 'dark' ? 'light' : 'dark' })
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