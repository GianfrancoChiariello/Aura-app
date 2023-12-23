import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { locale } from '@tauri-apps/api/os';
import { getTheme } from '../../utils/tauri.tools';


interface interfaceType {
    theme: String,
    sideBar: String,
    lang: String,
    changeTheme: () => void,
    changeSize: () => void,
    changeLang: (param? : string) => void,
}

const Systemlocale = await locale();
const SystemTheme = await getTheme()

export const interfaceStore = create(
    persist<interfaceType>((set, get) => ({
        theme: SystemTheme as string,
        sideBar: '80px',
        lang: Systemlocale as string,
        changeTheme: () => {
            set({ theme: get().theme == 'dark' ? 'light' : 'dark' })
        },
        changeSize: () => {
            set({ sideBar: get().sideBar == '80px' ? '250px' : '80px' })
        },
        changeLang: (param) => {
            set({ theme: param })
        },
    }), { name: 'interface' })
)