import { CircularProgress } from "@mui/material"

const Loading = () => {
  return (
    <div className="bg-[#111111] flex justify-around items-center flex-col gap-16 bg-[url('/assets/gradient.svg')] bg-no-repeat"> 
        <img src="assets/logo.svg" alt="" width={120} />
        <CircularProgress disableShrink />
    </div>
  )
}

export default Loading