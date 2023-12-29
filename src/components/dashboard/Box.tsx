import { useNavigate } from "react-router-dom"

const Box = ({text, href, action} : {text: string, href?: string, action?: void}) => {

    const navigate = useNavigate();
    
  return (
    <div className="w-full h-full flex justify-center items-center uppercase text-[26px] font-semibold text-[#C8C8C8] cursor-pointer hover:opacity-90" onClick={() => href ? navigate(href) : action ? action : null}>
        {text}
    </div>
  )
}

export default Box