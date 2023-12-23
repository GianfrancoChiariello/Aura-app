import { appWindow } from '@tauri-apps/api/window';


export const getTheme = async () => {
    return await appWindow.theme() as string;
}