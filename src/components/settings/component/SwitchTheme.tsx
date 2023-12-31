import { Select, Box, FormControl, MenuItem, SelectChangeEvent } from '@mui/material'
import { interfaceStore } from '../../../state/stores/interface.store';

const SwitchTheme = () => {
    const { changeTheme, theme } = interfaceStore();

    const handleChange = (event: SelectChangeEvent) => {
        changeTheme(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth sx={{
                '& .MuiSelect-select': {
                    color: 'white',
                    opacity: '.8',
                    backgroundColor: 'transparent',
                    border: 'none', 
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                },
            }}>
                <Select
                    id="theme"
                    value={theme}
                    onChange={handleChange}
                    displayEmpty
                    variant="outlined"
                    sx={{
                        '& fieldset': {
                            borderRadius: '.5rem',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                    }}
                >
                    <MenuItem value={"dark"}>Dark</MenuItem>
                    <MenuItem value={"light"}>Light</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SwitchTheme