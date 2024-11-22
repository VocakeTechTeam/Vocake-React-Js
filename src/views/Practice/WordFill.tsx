import { Box } from '@mui/material';
type WordFillProps = {
    char?: string;
    isDisplayed?: boolean;
};

export const WordFill = ({ char, isDisplayed = false }: WordFillProps) => {
    return (
        <Box
            sx={{
                maxWidth: '20%',
                flex: 1,
                fontSize: '30px',
                height: '50px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {isDisplayed && <>{char}</>}
            <Box
                sx={{
                    width: '100%',
                    height: '3px',
                    background: 'gray',
                    borderRadius: '20px',
                    marginTop: 'auto',
                }}
            />
        </Box>
    );
};
