import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { interfaceStore } from "../../state/stores/interface.store";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import Badge from '@mui/material/Badge';
import { capitalize } from "../../utils/functions";
import { memo } from "react";

const Sidebar = memo(({ children }: { children: ReactNode }) => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { sideBar, changeSize } = interfaceStore();

    const items = [
        {
            icon: '/assets/icons/home_icon.svg',
            item: t('dashboard'),
            anchor: '/dashboard',
            notification: false
        },
        {
            icon: '/assets/icons/chart_icon.svg',
            item: t('projects'),
            anchor: '/projects',
            notification: false
        },
        {
            icon: '/assets/icons/message_icon.svg',
            item: t('messages'),
            anchor: '/messages',
            notification: true
        },
        {
            icon: '/assets/icons/stats_icon.svg',
            item: t('board'),
            anchor: '/board',
            notification: false
        },
        {
            icon: '/assets/icons/notification_icon.svg',
            item: t('notification'),
            anchor: '/notificaction',
            notification: false
        },
    ]

    const subItems = [
/*         {
            icon: '/assets/icons/user_icon.svg',
            item: t('user'),
            anchor: '/user',
            notification: false
        }, */
        {
            icon: '/assets/icons/setting_icon.svg',
            item: t('settings'),
            anchor: '/settings',
            state: {tab: 0},
            notification: false
        },
        {
            icon: '/assets/icons/logout_icon.svg',
            item: t('logout'),
            anchor: '/',
            notification: false
        }
    ]

    return (
        <div className={`dark:bg-[#111111]  dark:text-white transition-all grid ${sideBar == '80px' ? 'grid-cols-[80px_minmax(80px,_1fr)]' : 'grid-cols-[250px_minmax(250px,_1fr)]'}`}>
            <div className="dark:bg-[#111111] relative">
                <div className={`absolute top-24 -right-[12px] z-50 rounded-full bg-[#4C6198] p-1 cursor-pointer hover:bg-[#41568C] ${sideBar !== '80px' && 'rotate-180'} transition-all`} onClick={changeSize}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                        <path  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <div className="flex flex-col items-start gap-7 min-w-20 overflow-hidden h-full">
                    <div className="mx-auto cursor-pointer mb-10 mt-2" onClick={changeSize}>
                        <img src={'/auragile.svg'} width={78} />
                    </div>
                    <div className="flex flex-col items-start gap-7">
                        {
                            items.map((item, index) => (
                                <div className="flex justify-between items-center h-11 transition-all group hover:cursor-pointer relative" onClick={() => navigate(item.anchor)} key={index}>
                                    <Tooltip
                                        title={capitalize(item.item)}
                                        disableHoverListener={sideBar !== '80px'}
                                        TransitionComponent={Zoom}
                                        placement="right"
                                        arrow
                                        disableInteractive
                                    >
                                        <div className={`min-w-20 flex justify-center after:transition-all ${sideBar == '80px' && item.anchor == pathname ? 'after:scale-100' : 'after:scale-0'} after:w-2 after:h-14 after:bg-[#4C6198] after:absolute after:-top-2 after:left-[74px] after:rounded-l-xl`}>
                                        <Badge badgeContent={" "} invisible={!item.notification as boolean} variant="dot" overlap="circular" sx={{
                                                '& .MuiBadge-badge' : {
                                                    backgroundColor: '#4C6198',
                                                    width: '9px',
                                                    height: '9px',
                                                }
                                            }}>
                                            <img src={item.icon} alt={item.item} width={30} height={30} />
                                        </Badge>
                                            </div>
                                    </Tooltip>
                                    <span className={`ml-3 text-lg font-semibold capitalize text-[#D1D1D1] group-hover:text-white ${item.anchor == pathname && 'text-white'}`}>{item.item}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col flex-1 items-start justify-end pb-4 gap-10 w-full">
                        {
                            subItems.map((item, index) => (
                                <div className={`flex justify-between items-center h-11 transition-all group hover:cursor-pointer relative`} onClick={() => navigate(item.anchor, {state: item.state})} key={index}>
                                    <Tooltip
                                        title={capitalize(item.item)}
                                        disableHoverListener={sideBar !== '80px'}
                                        TransitionComponent={Zoom}
                                        placement="right"
                                        arrow
                                        disableInteractive
                                    >
                                        <div className={`min-w-20 flex justify-center after:transition-all ${sideBar == '80px' && item.anchor == pathname ? 'after:scale-100' : 'after:scale-0'} after:w-2 after:h-14 after:bg-[#4C6198] after:absolute after:-top-2 after:left-[74px] after:rounded-l-xl`}>
                                        <Badge badgeContent={" "} invisible={!item.notification as boolean} variant="dot" overlap="circular" sx={{
                                            '& .MuiBadge-badge' : {
                                                backgroundColor: '#4C6198',
                                                width: '9px',
                                                height: '9px',
                                            }
                                        }}>
                                            <img src={item.icon} alt={item.item} width={30} height={30} />
                                        </Badge>
                                        </div>
                                    </Tooltip>
                                    <span className={`ml-3 text-lg font-semibold capitalize text-[#D1D1D1] group-hover:text-white ${item.anchor == pathname && 'text-white'}`}>{item.item}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
})

export default Sidebar