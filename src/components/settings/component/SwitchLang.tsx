import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { interfaceStore } from '../../../state/stores/interface.store';

const SwitchLang = () => {

    const { lang, changeLang } = interfaceStore();

    const buttons = [
        {
            title: 'EN',
            value: 'en-EN'
        },
        {
            title: 'ES',
            value: 'es-ES'
        },
        {
            title: 'PT',
            value: 'pt-BR'
        },
    ]

    return (
        <ToggleButtonGroup
            color="primary"
            value={lang}
            exclusive
            onChange={(_e, newValue) => newValue ? changeLang(newValue) : null}
            aria-label="Platform"
            sx={{
                '& .MuiToggleButtonGroup-grouped': {
                    borderRadius: '.5rem',
                    fontWeight: 'semilbold',
                    color: '#63809C',
                    '&.Mui-selected': {
                        color: 'white',
                    },
                }}}
        >
            {buttons.map((item, index) => (
                <ToggleButton key={index} value={item.value}>{item.title}</ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}

export default SwitchLang