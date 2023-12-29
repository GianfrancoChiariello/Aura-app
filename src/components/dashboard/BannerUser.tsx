
const BannerUser = () => {
  return (
    <div className="w-full h-full grid grid-cols-6 items-center">
        <div className="col-span-6 xl:col-span-4 grid gap-4 justify-center">
            <h3 className="font-semibold text-2xl">Hi Gianfranco</h3>
            <p className="text-lg font-normal text-wrap">Welcome to principal manager in your enviroment</p>
            <span className="text-lg">Your score <h2 className="inline font-extrabold text-4xl mx-4 text-[#99FC03]">A+</h2></span>
        </div>
        <div className="col-span-2 bg-[url('/assets/bitMoji.png')] h-full bg-center hidden xl:block">
        </div>
    </div>
  )
}

export default BannerUser