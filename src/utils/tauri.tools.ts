import { appWindow } from '@tauri-apps/api/window';
import { locale } from '@tauri-apps/api/os';
import { installUpdate } from '@tauri-apps/api/updater';
import { relaunch } from '@tauri-apps/api/process';
import { toast } from 'sonner';
import {sendNotification } from '@tauri-apps/api/notification'

export const getTheme = async () => {
    const defaultTheme = await appWindow.theme() as string;
    return defaultTheme
}

export const getLocale = async () => {
    const Defaultlocale = await locale() as string;
    return Defaultlocale;
}

export const startInstall = async (newVersion: String) => {
    try {
        const update = await installUpdate();
        console.log(update);
        toast.promise(update as any, {
            loading: `Installing update v${newVersion}`,
            success: () => {
                relaunch();
                sendNotification({ title: 'Update status', body: 'Successfully 🚀' });
                return `Successfully updated v${newVersion}`
            }
        })
    } catch (error) {
        toast.error(error as string)
    }
}
