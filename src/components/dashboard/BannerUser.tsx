
const BannerUser = () => {
  return (
    <div className="w-full h-full grid grid-cols-6 items-center justify-between px-6">
        <div className="col-span-6 lg:col-span-4 grid gap-2">
            <h3 className="font-semibold text-2xl text-center lg:text-left">Hi Gianfranco</h3>
            <p className="text-lg font-normal text-wrap hidden 2xl:block">Welcome to manager in your enviroment</p>
            <span className="text-lg text-center lg:text-left">Your score: <h2 className="inline font-extrabold text-4xl text-[#99FC03]">A+</h2></span>
        </div>
        <div className="col-span-2 bg-[url('/assets/bitMoji.png')] h-full w-full bg-center hidden lg:block bg-cover bg-no-repeat"/>
    </div>
  )
}

export default BannerUser