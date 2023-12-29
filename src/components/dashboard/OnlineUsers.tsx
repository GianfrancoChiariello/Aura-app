import AvatarGroup from '@mui/material/AvatarGroup';
import { IconButton,Avatar } from '@mui/material';

const OnlineUsers = () => {
    return (
        <>
            <IconButton type="button" sx={{ p: '5px', color: 'whitesmoke', borderRadius: '15px' }} aria-label="notification">
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Cindy Baker" src="" />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar alt="Trevor Henderson" src="" />
                </AvatarGroup>
            </IconButton>
        </>
    )
}

export default OnlineUsers