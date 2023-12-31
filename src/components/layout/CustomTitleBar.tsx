import { appWindow } from "@tauri-apps/api/window";

const CustonTitleBar = () => {

  return (
    <div data-tauri-drag-region className="flex items-center justify-between bg-[#111111] w-full pl-3 pr-2 h-8">
    <div className="text-white font-bold text-xs opacity-90 tracking-widest">Aura</div>
    <div className="flex items-center space-x-4">
      <button className="text-white hover:text-gray-400 focus:outline-none"  onClick={() => appWindow?.minimize()}>
        &#x2013; 
      </button>
      <button className="text-white hover:text-gray-400 focus:outline-none"  onClick={() => appWindow?.toggleMaximize()}>
        &#x1F5D6;
      </button>
      <button className="text-white hover:text-gray-400 focus:outline-none" onClick={() => appWindow?.close()}>
        &#x2715;
      </button>
    </div>
  </div>
  )
}

export default CustonTitleBar