import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getTheme,getLocale } from '../../utils/tauri.tools';
import i18n from "i18next";


interface interfaceType {
    theme: any,
    sideBar: String,
    lang: any,
    changeTheme: (param? : string) => void,
    changeSize: () => void,
    resetSize: () => void,
    changeLang: (param? : string) => void,
}

export const interfaceStore = create(
    persist<interfaceType>((set, get) => ({
        theme: null,
        lang: null,
        sideBar: '80px',
        changeTheme: async (param) => {
            set({ theme: param})
        },
        changeSize: () => {
            set({ sideBar: get().sideBar == '80px' ? '250px' : '80px' })
        },
        resetSize: () => {
            set({sideBar: '80px'})
          },
        changeLang: (param) => {
            i18n.changeLanguage(param)
            set({ lang: param })
        },
    }), { name: 'interface' })
)

getTheme().then((theme) => {
    interfaceStore.getState().theme ? null : interfaceStore.setState({theme})
})
getLocale().then((lang) => {
    interfaceStore.getState().lang ? null : (interfaceStore.setState({lang}), i18n.changeLanguage(lang))
})