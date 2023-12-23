import { useNavigate } from "react-router-dom"
import { interfaceStore } from "../state/stores/interface.store";

const Dashboard = () => {

    const navigate = useNavigate();
    const {sideBar,changeSize} = interfaceStore();    

    return (
        <div className={`dark:bg-[#111111]  dark:text-white transition-all grid ${sideBar == '80px' ? 'grid-cols-[80px_minmax(80px,_1fr)]' : 'grid-cols-[250px_minmax(250px,_1fr)]'}`}>
            <div className="dark:bg-[#111111]" onClick={changeSize}>Sidebar <button onClick={() => navigate('/')}> Back</button></div>
            <div className="rounded-tl-xl dark:bg-[#3A3A3A]  grid gap-12 grid-rows-[100px_minmax(190px,_100px)_1fr] p-9">
                <div className="border border-blue-400">search</div>
                <div className="border border-green-500 grid  lg:grid-cols-5 grid-cols-4 gap-10">
                    <div className="border border-pink-500 col-span-1 lg:col-span-2 rounded-2xl"></div>
                    <div className="border border-red-500 rounded-2xl"></div>
                    <div className="border border-blue-500 rounded-2xl"></div>
                    <div className="border border-violet-700 rounded-2xl"></div>
                </div>
                <div className="border border-blue-500 grid grid-cols-5 grid-rows-2 gap-10">
                    <div className="border border-red-500 col-span-3 row-span-2 rounded-2xl"></div>
                    <div className="border border-orange-500 col-span-2 rounded-2xl"></div>
                    <div className="border border-pink-500 col-span-2 rounded-2xl"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard