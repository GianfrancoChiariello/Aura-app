import { Avatar } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { SettingsType } from "../interfaces/settings/tabs.setting";
import TabC from "../components/settings/Tab";
import SwitchLang from "../components/settings/component/SwitchLang";
import { useTranslation } from "react-i18next";
import { interfaceStore } from "../state/stores/interface.store";

const Settings = () => {
    const { state } = useLocation();
    const {lang,changeTheme} = interfaceStore();
    const {t} = useTranslation();
    const [tabSelected, setTabSelected] = useState(state?.tab || 0);

    const tabs = [
        {
            tab: t('settings'),
            disabled: false,
        },
        {
            tab: t('notification'),
            disabled: false,
        },
        {
            tab: t('history'),
            disabled: false,
        },
    ]

    const allSettings : SettingsType = {
        0: [
            {
                title: t('interface'),
                options: [
                    {
                        subTitle: t('theme'),
                        value: 'Dark',
                        anchor: '/dist',
                        component: null,
                        action: changeTheme,
                        button: t('change')
                    },
                    {
                        subTitle: 'Languaje',
                        value: lang,
                        anchor: null,
                        component: <SwitchLang/>,
                        button: t('change')
                    },
                ]
            }
        ],
        1: [
            {
                title: 'Notifications',
                options: [
                    {
                        subTitle: 'All',
                        value: 'On',
                        anchor: '/dist',
                        component: null,
                        button: 'Off'
                    },
                    {
                        subTitle: 'Microsoft Teams',
                        value: 'EN',
                        anchor: '/',
                        component: null,
                        button: 'Integrate'
                    },
                ]
            }
        ],
        2: [
            {
                title: '',
                options: [
                    {
                        subTitle: '',
                        value: '',
                        anchor: '',
                        component: null,
                        button: ''
                    },
                    {
                        subTitle: '',
                        value: '',
                        anchor: '',
                        component: null,
                        button: ''
                    },
                ]
            }
        ],
    }

    return (
        <div className="bg-gray-900 rounded-tl-xl h-full overflow-hidden relative">
            <div className="mx-auto h-full">
                <div className="bg-[#111623] h-[25vh] w-full top-8">
                    <div className="max-w-screen-xl h-full">
                        <div className="max-w-2xl h-full mx-auto flex flex-col justify-end gap-5">
                            <div className="flex items-center gap-8">
                                <Avatar src="" sx={{ width: '145px', height: '145px', opacity: '0.3' }} />
                                <div>
                                    <span className="inline-block font-semibold text-xl mt-3 mb-1">@gch</span>
                                    <h1 className="inline-block mx-5 opacity-85 text-2xl font-semibold">Gianfranco Chiariello</h1>
                                    <div className="inline">
                                        <EditIcon sx={{
                                            marginBottom: '10px',
                                            backgroundColor: '#4C6198',
                                            borderRadius: '8px',
                                            padding: '2px',
                                            opacity: '0.8',

                                            '&:hover': {
                                                opacity: 1,
                                                cursor: 'pointer'
                                            }
                                        }} />
                                    </div>
                                    <p className="text-[#63809C]">Penta Security Solutions  •  <span className="capitalize">{t('joinedAgo', {months: 6})}</span></p>
                                </div>
                            </div>
                            <div>
                                <Tabs value={tabSelected}>
                                    {tabs.map((item, index) => (
                                        <Tab key={index} onClick={() => setTabSelected(index)} label={item.tab} sx={{
                                            textTransform: 'capitalize',
                                            fontWeight: 'bold',
                                            color: '#63809C',
                                            borderRadius: '15px',
                                            '&.Mui-selected': {
                                                color: 'whitesmoke',
                                            },
                                        }} />
                                    ))}
                                </Tabs>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="overflow-y-auto h-[75vh] scrollbar scrollbar-thumb-rounded-md scrollbar-thumb-gray-800 scrollbar-track-[#111623] scrollbar-small">
                    <div className="h-[2000px] max-w-screen-xl">
                        <div className="h-full max-w-2xl mx-auto my-8">
                            {
                                allSettings[tabSelected].map((item, index) => (
                                    <div key={index}>
                                        <h2 className="text-2xl font-semibold mb-4 capitalize">{item.title}</h2>
                                        {
                                            item.options.map((item,index) => (
                                                <TabC item={item} key={index}/>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings