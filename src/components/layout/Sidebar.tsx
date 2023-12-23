import { useNavigate } from "react-router-dom"
import { interfaceStore } from "../../state/stores/interface.store";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const Sidebar = ({ children }: { children: ReactNode }) => {

    const { t } = useTranslation();
    const { sideBar, changeSize } = interfaceStore();

    const items = [
        {
            icon: '../../../src/assets/icons/home_icon.svg',
            item: t('Dashboard'),
            anchor: null,
            active: undefined
        },
        {
            icon: '../../../src/assets/icons/chart_icon.svg',
            item: t('Projects'),
            anchor: null,
            active: undefined
        },
        {
            icon: '../../../src/assets/icons/message_icon.svg',
            item: t('Messages'),
            anchor: null,
            active: undefined
        },
        {
            icon: '../../../src/assets/icons/stats_icon.svg',
            item: t('Board'),
            anchor: null,
            active: undefined
        },
        {
            icon: '../../../src/assets/icons/notification_icon.svg',
            item: t('Notification'),
            anchor: null,
            active: undefined
        },
    ]

    return (
        <div className={`dark:bg-[#111111]  dark:text-white transition-all grid ${sideBar == '80px' ? 'grid-cols-[80px_minmax(80px,_1fr)]' : 'grid-cols-[250px_minmax(250px,_1fr)]'}`}>
            <div className="dark:bg-[#111111] relative">
                <div className={`absolute top-24 -right-[12px] z-50 rounded-full bg-[#4C6198] p-1 cursor-pointer hover:bg-[#41568C] ${sideBar !== '80px' && 'rotate-180'} transition-all`} onClick={changeSize}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <div className="flex flex-col items-start gap-7 min-w-20 overflow-hidden">
                    <div className="mx-auto cursor-pointer mb-10" onClick={changeSize}>
                        <img src={'../../../public/auragile.svg'} width={78} />
                    </div>
                    <div className="flex flex-col items-start gap-7">
                        {
                            items.map((item, index) => (
                                <div className="flex justify-between items-center h-11 transition-all group hover:cursor-pointer" key={index}>
                                    <Tooltip 
                                        title={item.item} 
                                        TransitionComponent={Zoom} 
                                        placement="right" 
                                        arrow 
                                        disableInteractive
                                    >
                                        <div className="min-w-20 flex justify-center">
                                            <img src={item.icon} alt={item.item} width={30} height={30} />
                                        </div>
                                    </Tooltip>
                                    <span className="ml-3 text-lg font-semibold text-[#D1D1D1] group-hover:text-white ">{item.item}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Sidebar