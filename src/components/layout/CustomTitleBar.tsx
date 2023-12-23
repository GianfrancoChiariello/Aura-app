import { appWindow } from "@tauri-apps/api/window";

const CustonTitleBar = () => {

  return (
    <div data-tauri-drag-region className="flex items-center justify-between bg-[#111111] w-full px-2 h-6">
    <div className="text-white font-bold text-lg">{import.meta.env.VITE_APP_TITLE}</div>
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