import {Stack,Chip,Avatar} from '@mui/material'
import {Image} from "@nextui-org/react";

const Card = ({item} : any) => {
    return (
        <div className='w-full max-w-[250px] flex flex-col p-4 bg-white rounded-xl overflow-hidden'>
            <div className='w-full'>
                <Image isZoomed src={`assets/backgrounds/background_${item}.png`} alt="" className='w-full h-full hover:cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-start items-start font-semibold gap-2 mt-2'>
                    <Avatar />
                    <span className='text-[#26252B]'>Flow shop</span>
                </div>
                <div>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Chip Outlined" variant="outlined" />
                        <Chip label="Chip Outlined" variant="outlined" />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Card