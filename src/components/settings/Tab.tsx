import { Option } from "../../interfaces/settings/tabs.setting"

const TabC = ({item} : {item: Option}) => {

    return (
        <div className="bg-[#111623] mb-1 rounded-md px-4 py-6 flex justify-between items-center">
            <div>
                <h4 className="font-semibold text-lg mb-2 capitalize">{item.subTitle}</h4>
                <span className="opacity-90 LOW">{item.value}</span>
            </div>
            {
                item.anchor ? (
                    <button className="bg-[#4C6198] py-2 px-3 text-lg rounded-lg  hover:opacity-85" onClick={item.action as VoidFunction}>{item.button}</button>
                ) : item.component
            }
        </div>
    )
}

export default TabC