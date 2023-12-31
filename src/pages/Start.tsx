import { interfaceStore } from "../state/stores/interface.store"
import { useNavigate } from 'react-router-dom'
import { getVersion } from '@tauri-apps/api/app';
import { useState, useEffect } from "react";
import { FormControlLabel, Checkbox, TextField, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const focusedColor = "#ABABAB";
const useStyles = makeStyles(() => ({
    root: {
        "& label.Mui-focused": {
            color: focusedColor
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: focusedColor
        },
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: focusedColor
        },
        "& .MuiOutlinedInput-root": {
            color: 'white',
            opacity: '.8',
            "&.Mui-focused fieldset": {
                borderColor: focusedColor
            }
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4D4D4D"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ABABAB"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ABABAB"
        },
    }
}));

const Start = () => {
    const navigate = useNavigate();
    const { lang } = interfaceStore();
    const [version, setVersion] = useState("")

    const getVersionApp = async () => {
        const version = await getVersion();
        setVersion(version)
    }

    useEffect(() => {
        getVersionApp()
    }, [])


    const classes = useStyles();

    return (
        <div className="w-full h-full bg-white dark:bg-[#111111] dark:text-white flex justify-center items-center bg-[url('/assets/gradient.svg')] bg-no-repeat">
            <div className="flex flex-col items-center justify-center max-w-[548px] text-center">
                <div>
                    <img src="assets/logo.svg" alt="Aura logo" width={96} className="mb-4" />
                </div>
                <p className="max-w-[420px] text-white/70 font-['Helvetica'] text-[17px] mb-12">
                    We are excited to have your back. Log in now and access your account.
                </p>
                <div className="flex flex-col gap-4 w-full mb-3">
                    <TextField
                        fullWidth
                        className={classes.root}
                        placeholder="Username or Email"
                    />
                    <TextField
                        fullWidth
                        className={classes.root}
                        placeholder="Password"
                    />
                </div>
                <div className="w-full flex justify-between items-center mb-12">
                    <FormControlLabel control={
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: '#7177FF',
                                '&.Mui-checked': {
                                    color: '#7177FF',
                                },
                            }}
                        />}
                        label="Remember me"
                    />
                    <a>Forgot your password?</a>
                </div>
                <div className="w-full">
                    <div className="w-full p-3 mb-8 bg-gradient-to-l from-indigo-500 rounded-sm cursor-pointer hover:opacity-90" onClick={() => navigate('/dashboard')}>
                        <h2>Log In</h2>
                    </div>

                    <Divider sx={{
                        width: '100%',
                        color: 'white',
                        opacity: '.8',
                        margin: '0 0 24px 0',
                        "&::before, &::after": {
                            borderColor: "#4D4D4D",
                        },
                    }}>or</Divider>
                    <div className="w-full border border-gray-700 p-3 mb-8 rounded-sm group cursor-pointer">
                        <svg className="mx-auto group-hover:opacity-85" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_379_4691)">
                                <path d="M31.688 16.3683C31.688 15.2807 31.5998 14.1872 31.4117 13.1172H16.3199V19.2785H24.9623C24.6036 21.2656 23.4513 23.0235 21.764 24.1405V28.1383H26.92C29.9478 25.3516 31.688 21.2362 31.688 16.3683Z" fill="#4285F4" />
                                <path d="M16.32 32.0009C20.6352 32.0009 24.2744 30.5841 26.9259 28.1384L21.7699 24.1406C20.3354 25.1165 18.4835 25.6691 16.3259 25.6691C12.1517 25.6691 8.61246 22.853 7.34257 19.0669H2.02197V23.1882C4.73812 28.5911 10.2704 32.0009 16.32 32.0009V32.0009Z" fill="#34A853" />
                                <path d="M7.33667 19.0671C6.66645 17.08 6.66645 14.9282 7.33667 12.9411V8.81982H2.02195C-0.247388 13.3409 -0.247388 18.6673 2.02195 23.1884L7.33667 19.0671V19.0671Z" fill="#FBBC04" />
                                <path d="M16.32 6.33288C18.6011 6.29761 20.8057 7.15596 22.4578 8.73156L27.0258 4.16349C24.1333 1.44734 20.2942 -0.0459547 16.32 0.00107822C10.2704 0.00107822 4.73812 3.41096 2.02197 8.81974L7.33669 12.941C8.6007 9.14897 12.1458 6.33288 16.32 6.33288V6.33288Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_379_4691">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <span className="absolute right-0 bottom-0 p-2">
                    v{version} | {lang}
            </span>
        </div>
    )
}

export default Start