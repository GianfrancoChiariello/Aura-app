import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { interfaceStore } from '../state/stores/interface.store'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/dashboard/SearchBar';
import OnlineUsers from '../components/dashboard/OnlineUsers';
import BannerUser from '../components/dashboard/BannerUser';
import Box from '../components/dashboard/Box';
import StepperModal from '../components/layout/StepperModal';
import { useState } from 'react';
import { Select, SelectItem, Divider } from "@nextui-org/react";
import AccountTreeIcon from '@mui/icons-material/AccountTree';


const Dashboard = () => {

    const [open, setOpen] = useState(false as boolean)
    const { sideBar } = interfaceStore();
    const navigate = useNavigate();

    let project = "Enviroment"

    return (
        <div className="rounded-tl-xl dark:bg-[#3A3A3A] grid gap-5 grid-rows-[70px_minmax(140px,_70px)_1fr] pl-8 pr-5 pb-9 pt-4">
            <div className={`flex justify-between items-center ${sideBar == '80px' ? '2xl:pl-44' : '2xl:pl-16'} transition-all`}>
                <div className='flex items-center gap-3 bg-[#242424] px-2 py-2 xl:px-3 xl:py-2 rounded-3xl cursor-pointer hover:opacity-95'>
                    <Avatar alt="Remy Sharp" src="" sx={{ width: '30px', height: '30px' }} />
                    <span className="hidden xl:block">Enviroment</span>
                </div>
                <div className='border-b-2 border-[#97F704] cursor-pointer hover:opacity-90'>Dashboard</div>
                <div>
                    <SearchBar />
                </div>
                <div className='opacity-90 hidden xl:block'>
                    <OnlineUsers />
                </div>
                <div className="2xl:mr-8 flex flex-nowrap">
                    <IconButton type="button" sx={{ p: '10px', color: 'whitesmoke' }} aria-label="notification">
                        <NotificationsNoneIcon />
                    </IconButton>
                    <IconButton type="button" sx={{ p: '10px', color: 'whitesmoke' }} aria-label="notification">
                        <CalendarTodayOutlinedIcon />
                    </IconButton>
                </div>
                <div>
                    <div className='flex items-center gap-3 bg-[#242424] px-3 py-2 rounded-3xl cursor-pointer hover:opacity-95' onClick={() => navigate('/settings', { state: { tab: 0 } })}>
                        Gianfranco
                        <Avatar alt="Remy Sharp" src="" sx={{ width: '30px', height: '30px' }} />
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-11 grid-cols-4 gap-10">
                <div className="bg-custom-gray col-span-1 lg:col-span-5 rounded-2xl">
                    <BannerUser />
                </div>
                <div className="bg-custom-gray rounded-2xl lg:col-span-2">
                    <Box text={'clients'} href={'/clients'} />
                </div>
                <div className="bg-custom-gray rounded-2xl lg:col-span-2">
                    <Box text={'projects'} href={'/projects'} />
                </div>
                <div className="bg-custom-gray rounded-2xl lg:col-span-2" onClick={() => setOpen(true)}>
                    <StepperModal open={open} action={setOpen}>
                        <Box text={'new +'} />
                    </StepperModal>
                </div>
            </div>
            <div className="grid grid-cols-11 grid-rows-2 gap-8">
                <div className="bg-custom-gray col-span-7 row-span-2 rounded-2xl flex flex-col overflow-hidden relative">
                    <div className="px-4">
                        <div className='flex justify-between items-center pt-4'>
                            <h2 className='font-semibold text-2xl pl-2 pb-2'>{project} Stadistics</h2>
                            <Select
                                placeholder="Projects"
                                startContent={<AccountTreeIcon />}
                                className="max-w-32"
                                popoverProps={{
                                    classNames: {
                                        base: "before:bg-black",
                                        content: "p-0 border-small border-divider bg-background",
                                    },
                                }}
                            >
                                <SelectItem key={1} value={"1"}>
                                    1
                                </SelectItem>
                            </Select>
                        </div>
                        <Divider className="my-2 bg-[#6C7A9F]" />
                    </div>
                    <div className='grid grid-cols-8 grid-rows-2 h-full gap-4 p-4 pt-0'>
                        <div className="border border-red-400 col-span-4 rounded-xl"></div>
                        <div className="border border-red-400 col-span-2 rounded-xl"></div>
                        <div className="border border-red-400 col-span-2 rounded-xl"></div>
                        <div className="border border-red-400 col-span-6 rounded-xl"></div>
                        <div className="border border-red-400 col-span-2 rounded-xl"></div>
                    </div>
                </div>
                <div className="bg-custom-gray col-span-4 rounded-2xl"></div>
                <div className="bg-custom-gray col-span-4 rounded-2xl"></div>
            </div>
        </div>
    )
}

export default Dashboard