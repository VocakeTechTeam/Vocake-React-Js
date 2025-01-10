import { useState, ReactNode, ChangeEvent } from 'react';
import { Box, Typography } from '@mui/material';

type InputProps = {
    icon: ReactNode;
    placeholder: string;
    type?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    errorMessage?: null | string;
};

export const Input = ({
    type = 'text',
    icon,
    placeholder,
    handleChange,
    name,
    errorMessage = null,
}: InputProps) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    background: '#F1F1F1',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: errorMessage
                        ? 'red solid 1px'
                        : '#8c8a8a solid 1px',
                    width: '100%',
                    borderRadius: '50px',
                    padding: '10px',
                    '& input': {
                        border: 'transparent',
                        flex: 1,
                        background: 'none',
                        color: errorMessage ? 'red' : '',
                        '-webkit-text-fill-color': errorMessage ? 'red' : '',
                        '-webkit-box-shadow': '0 0 0 1000px transparent inset',
                    },
                    '& input:focus': {
                        border: 'transparent',
                        background: 'none',
                        outline: 'none',
                        flex: 1,
                    },
                    '& ::placeholder': {
                        color: errorMessage ? 'red' : '',
                    },
                    '& svg': {
                        width: '12px',
                        height: '12px',
                        color: errorMessage ? 'red' : '',
                    },
                }}
                onClick={() => {
                    setIsFocus(!isFocus);
                }}
            >
                {' '}
                <input
                    onChange={handleChange}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
                {icon}
            </Box>
            {errorMessage && (
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        color: 'red',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        fontSize: 12,
                    }}
                >
                    {errorMessage}
                </Box>
            )}
        </Box>
    );
};
