import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AvatarGroup from '@mui/material/AvatarGroup';
import {interfaceStore} from '../state/stores/interface.store'

const Dashboard = () => {

    const { sideBar } = interfaceStore();

    return (
        <div className="rounded-tl-xl dark:bg-[#3A3A3A]  grid gap-12 grid-rows-[100px_minmax(190px,_100px)_1fr] pl-8 pr-5 pb-9">
            <div className={`flex justify-between items-center ${sideBar == '80px' ? '2xl:pl-44' : '2xl:pl-16'} transition-all`}>
                <div className='flex items-center gap-3 bg-[#242424] px-2 py-2 xl:px-3 xl:py-2 rounded-3xl'>
                    <Avatar alt="Remy Sharp" src="" sx={{ width: '30px', height: '30px' }} />
                    <span className="hidden xl:block">Enviroment</span>
                </div>
                <div className='border-b-2 border-[#97F704] cursor-pointer hover:opacity-90'>Dashboard</div>
                <div>
                    <div className='bg-[#242424] rounded-lg 2xl:w-96 flex'>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{
                                'aria-label': 'search', style: {
                                    color: 'white',
                                }
                            }}
                        />
                        <IconButton type="button" sx={{ p: '10px', color: 'gray' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='opacity-90 hidden xl:block'>
                    <IconButton type="button" sx={{ p: '5px', color: 'whitesmoke', borderRadius: '15px' }} aria-label="notification">
                        <AvatarGroup max={4}>
                            <Avatar alt="Remy Sharp" src="" />
                            <Avatar alt="Travis Howard" src="" />
                            <Avatar alt="Cindy Baker" src="" />
                            <Avatar alt="Agnes Walker" src="" />
                            <Avatar alt="Trevor Henderson" src="" />
                        </AvatarGroup>
                    </IconButton>
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
                    <div className='flex items-center gap-3 bg-[#242424] px-3 py-2 rounded-3xl'>
                        Gianfranco
                        <Avatar alt="Remy Sharp" src="" sx={{ width: '30px', height: '30px' }} />
                    </div>
                </div>
            </div>
            <div className="grid  lg:grid-cols-5 grid-cols-4 gap-10">
                <div className="border border-pink-500 col-span-1 lg:col-span-2 rounded-2xl"></div>
                <div className="border border-red-500 rounded-2xl"></div>
                <div className="border border-blue-500 rounded-2xl"></div>
                <div className="border border-violet-700 rounded-2xl"></div>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-10">
                <div className="border border-red-500 col-span-3 row-span-2 rounded-2xl"></div>
                <div className="border border-orange-500 col-span-2 rounded-2xl"></div>
                <div className="border border-pink-500 col-span-2 rounded-2xl"></div>
            </div>
        </div>
    )
}

export default Dashboard