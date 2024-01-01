import Card from '../components/projects/Card';
import Folder from '../components/projects/Folder';


const Projects = () => {
    return (
        <div className="w-full h-full grid grid-cols-11 bg-[#3A3A3A] rounded-tl-xl overflow-hidden">
            <div className='col-span-11 2xl:col-span-8 overflow-y-scroll scrollbar scrollbar-thumb-gray-800 scrollbar-track-gray-600 scrollbar-small h-full'>
                <div className=" grid grid-rows-11 w-full px-12 2xl:px-0 2xl:max-w-[75%] mx-auto">
                    <div className="row-span-1 flex justify-start items-center">
                        Welcome Gianfranco´s!
                    </div>
                    <div className="row-span-5 flex flex-col mx-auto w-full">
                        <div className='flex items-center gap-2'>
                            <img src="assets/icons/folder_icon.svg" className='inline-block' />
                            General Folders
                        </div>
                        <div className="w-full h-full flex flex-wrap gap-8 mt-8 mx-auto">
                            {
                                [...Array(6)].map(() => (
                                    <Folder />
                                ))
                            }
                        </div>
                    </div>
                    <div className="row-span-5 flex flex-col gap-4 w-full mt-4 xl:mt-0">
                        <div className='flex items-center gap-2'>
                            <img src="assets/icons/folder_icon.svg" className='inline-block' />
                            latest Projects
                        </div>
                        <div className="w-full h-full flex flex-wrap gap-8 items-center mt-2 mx-auto">
                            {
                                [...Array(4)].map((_, index) => (
                                    <Card item={index + 1} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3 hidden 2xl:block bg-[#555555]">

            </div>
        </div>
    )
}

export default Projects