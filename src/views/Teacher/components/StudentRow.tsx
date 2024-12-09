import { Box, Typography } from '@mui/material';
type StudentRowProps = {
    id: string;
    name: string;
    icon: React.ReactNode;
    handleHover: (studentName: string) => void;
    handleClick: (id: string) => void;
};

export const StudentRow = ({
    name,
    icon,
    handleHover,
    id,
    handleClick,
}: StudentRowProps) => {
    return (
        <Box
            onClick={() => {
                handleClick(id);
            }}
            onMouseEnter={() => {
                handleHover(name);
            }}
            sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                '&:hover': {
                    background: '#DBE5EB',
                },
                padding: '10px',
                borderRadius: '5px',
            }}
        >
            {icon}

            <Typography fontSize={'12px'} textAlign={'left'} fontWeight={'400'}>
                {name}
            </Typography>
        </Box>
    );
};
