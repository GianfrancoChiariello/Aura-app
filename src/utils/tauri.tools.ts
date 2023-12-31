import { appWindow } from '@tauri-apps/api/window';
import { locale } from '@tauri-apps/api/os';

export const getTheme = async () => {
    const defaultTheme = await appWindow.theme() as string;
    return defaultTheme
}

export const getLocale = async () => {
    const Defaultlocale = await locale() as string;
    return Defaultlocale;
}