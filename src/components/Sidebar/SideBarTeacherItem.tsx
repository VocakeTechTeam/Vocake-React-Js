import { SideBarTeacherItemProps } from './SidebarTeacher';
import { Box, Typography } from '@mui/material';
export const SideBarTeacherItem: React.FC<SideBarTeacherItemProps> = ({
    label,
    bgColor = '#E4E7F4',
    icon,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 3,
                cursor: 'pointer',
                '&:hover': {
                    background: bgColor,
                },
                padding: '10px 0 10px 53px',
                width: '90%',
                borderRadius: '5px',
                alignItems: 'center',
            }}
        >
            {icon}
            <Typography
                sx={{ fontSize: 11, color: '#79797C', fontWeight: 500 }}
            >
                {label}
            </Typography>
        </Box>
    );
};
