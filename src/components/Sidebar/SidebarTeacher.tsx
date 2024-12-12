import React, { ReactNode } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
interface SideBarTeacherItemProps {
    label: string;
    bgColor?: string;
    icon: ReactNode;
}

const SideBarTeacherItemArr1: SideBarTeacherItemProps[] = [
    {
        label: 'My classes',
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.49775 0.5H11.502C14.0528 0.5 15.4928 1.94675 15.5003 4.4975V11.5025C15.5003 14.0525 14.0528 15.5 11.502 15.5H4.49775C1.947 15.5 0.500252 14.0525 0.500252 11.5025V4.4975C0.500252 1.94675 1.947 0.5 4.49775 0.5ZM8.03705 12.395C8.3603 12.395 8.62955 12.155 8.65955 11.8325V4.19C8.68955 3.9575 8.5778 3.72425 8.3753 3.5975C8.16455 3.47 7.90955 3.47 7.7078 3.5975C7.50455 3.72425 7.3928 3.9575 7.41455 4.19V11.8325C7.4528 12.155 7.72205 12.395 8.03705 12.395ZM11.4878 12.395C11.8028 12.395 12.0721 12.155 12.1103 11.8325V9.3725C12.132 9.13175 12.0203 8.9075 11.817 8.78C11.6153 8.6525 11.3603 8.6525 11.1503 8.78C10.9471 8.9075 10.8353 9.13175 10.8653 9.3725V11.8325C10.8953 12.155 11.1646 12.395 11.4878 12.395ZM5.16453 11.8325C5.13453 12.155 4.86528 12.395 4.54203 12.395C4.21952 12.395 3.94952 12.155 3.92027 11.8325V6.65C3.89777 6.41675 4.00952 6.185 4.21277 6.0575C4.41453 5.93 4.67028 5.93 4.87278 6.0575C5.07453 6.185 5.18778 6.41675 5.16453 6.65V11.8325Z"
                    fill={'#707FDD'} // Dynamically set icon color
                />
            </svg>
        ),
    },
    {
        label: 'Begin TEH 01',
        icon: <>✨</>,
    },
    {
        label: 'Advanced TEH 02',
        icon: <>😎</>,
    },
    {
        label: 'TEH 03',
        icon: <>🎯</>,
    },
    {
        label: 'TEH 04',
        icon: <>😤</>,
    },
];
const SideBarTeacherItemArr2: SideBarTeacherItemProps[] = [
    {
        label: 'Settings',
        icon: <SettingsIcon sx={{ width: 15, color: '#A6ABC8' }} />,
    },
    {
        label: 'Payment',
        icon: <AccountBalanceWalletIcon sx={{ width: 15, color: '#A6ABC8' }} />,
    },
    {
        label: 'Account',
        icon: (
            <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.97047 4.46829C9.97047 6.67106 8.2043 8.43733 5.99998 8.43733C3.7964 8.43733 2.02949 6.67106 2.02949 4.46829C2.02949 2.26552 3.7964 0.5 5.99998 0.5C8.2043 0.5 9.97047 2.26552 9.97047 4.46829ZM6 15.5C2.74678 15.5 0 14.9712 0 12.9312C0 10.8904 2.76404 10.3804 6 10.3804C9.25397 10.3804 12 10.9092 12 12.9492C12 14.99 9.23596 15.5 6 15.5Z"
                    fill="#A6ABC8"
                />
            </svg>
        ),
    },
    {
        label: 'Help',
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.75237 0.499023H11.2549C13.7974 0.499023 15.4999 2.28402 15.4999 4.93902V11.0673C15.4999 13.7148 13.7974 15.499 11.2549 15.499H4.75237C2.20987 15.499 0.499872 13.7148 0.499872 11.0673V4.93902C0.499872 2.28402 2.20987 0.499023 4.75237 0.499023ZM7.99243 5.79479C7.63994 5.79479 7.34743 5.50154 7.34743 5.14229C7.34743 4.77479 7.63994 4.48229 8.00743 4.48229C8.36743 4.48229 8.65993 4.77479 8.65993 5.14229C8.65993 5.50154 8.36743 5.79479 7.99243 5.79479ZM8.65231 10.8348C8.65231 11.1948 8.35981 11.4873 7.99231 11.4873C7.63231 11.4873 7.33981 11.1948 7.33981 10.8348V7.51976C7.33981 7.15901 7.63231 6.85976 7.99231 6.85976C8.35981 6.85976 8.65231 7.15901 8.65231 7.51976V10.8348Z"
                    fill="#A6ABC8"
                />
            </svg>
        ),
    },
];
const SideBarTeacherItem: React.FC<SideBarTeacherItemProps> = ({
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
                {label} {/* Display dynamic label */}
            </Typography>
        </Box>
    );
};

const SidebarTeacherHeader = () => {
    const classes = sidebarTeacherHeaderStyles();
    return (
        <Box className={classes.root}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="12" fill="#5A67BA" />
                <path
                    d="M13.808 10.72C13.6687 10.4633 13.467 10.269 13.203 10.137C12.9463 9.99767 12.642 9.928 12.29 9.928C11.6813 9.928 11.1937 10.1297 10.827 10.533C10.4603 10.929 10.277 11.4607 10.277 12.128C10.277 12.8393 10.4677 13.3967 10.849 13.8C11.2377 14.196 11.7693 14.394 12.444 14.394C12.906 14.394 13.2947 14.2767 13.61 14.042C13.9327 13.8073 14.1673 13.47 14.314 13.03H11.927V11.644H16.019V13.393C15.8797 13.8623 15.6413 14.2987 15.304 14.702C14.974 15.1053 14.5523 15.4317 14.039 15.681C13.5257 15.9303 12.9463 16.055 12.301 16.055C11.5383 16.055 10.8563 15.89 10.255 15.56C9.661 15.2227 9.19533 14.757 8.858 14.163C8.528 13.569 8.363 12.8907 8.363 12.128C8.363 11.3653 8.528 10.687 8.858 10.093C9.19533 9.49167 9.661 9.026 10.255 8.696C10.849 8.35867 11.5273 8.19 12.29 8.19C13.214 8.19 13.9913 8.41367 14.622 8.861C15.26 9.30833 15.6817 9.928 15.887 10.72H13.808Z"
                    fill="white"
                />
            </svg>
            <Box className={classes.voCakeTextContainer}>
                <Typography
                    color="#F99C30"
                    fontSize={'20px'}
                    fontWeight={'700'}
                >
                    Vo
                </Typography>
                <Typography
                    color="#F2383A"
                    fontSize={'20px'}
                    fontWeight={'700'}
                >
                    Cake
                </Typography>
            </Box>
        </Box>
    );
};

const sidebarTeacherHeaderStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            borderBottom: '#C8CBD9 solid 0.5px',
            height: '64px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
        },
        voCakeTextContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
    }),
);

const SidebarTeacher = () => {
    const classes = sidebarStyles();
    return (
        <Box className={classes.root}>
            <SidebarTeacherHeader />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px 0px',
                    borderBottom: '#C8CBD9 solid 0.5px',
                }}
            >
                {SideBarTeacherItemArr1.map(
                    (item: SideBarTeacherItemProps, index) => {
                        return (
                            <SideBarTeacherItem
                                key={index}
                                label={item.label}
                                icon={item.icon}
                            />
                        );
                    },
                )}
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px 0px',
                }}
            >
                {SideBarTeacherItemArr2.map(
                    (item: SideBarTeacherItemProps, index) => {
                        return (
                            <SideBarTeacherItem
                                key={index}
                                label={item.label}
                                icon={item.icon}
                            />
                        );
                    },
                )}
            </Box>
        </Box>
    );
};

export default SidebarTeacher;

const sidebarStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }),
);
