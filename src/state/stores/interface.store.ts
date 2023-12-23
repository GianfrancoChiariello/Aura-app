import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface interfaceType {
    theme: String,
    sideBar: String,
    changeTheme: () => void,
    changeSize: () => void,
}

export const interfaceStore = create(
    persist<interfaceType>((set,get) => ({
        theme: import.meta.env.VITE_APP_THEME || 'dark',
        sideBar: '110px',
        changeTheme: () => {
            set({ theme: get().theme == 'dark' ? 'light' : 'dark'})
        },
        changeSize: () => {
            set({sideBar: get().sideBar == '80px' ? '250px' : '80px'})
        }
    }), {name: 'interface'})
)