import React from 'react';
import { Box, createStyles, makeStyles, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Switch from '../../components/Switch/Switch';
import { avatarUrls } from '../../constant';

const Setting = () => {
    const [age, setAge] = useState('');
    const [userName, setUserName] = useState('Henry');
    const [email, setEmail] = useState('henryhoangduong@gmail.com');
    const [accountType, setAccountType] = useState('Student');
    const [theme, setTheme] = useState('light');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                gap: 2,
            }}
        >
            <Box>
                <h1 style={{ margin: 0 }}>Settings</h1>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 2,
                }}
            >
                <p style={{ margin: 0, color: '#586380', fontWeight: '600' }}>
                    Personal Information
                </p>
                <Box
                    sx={{
                        width: '100%',
                        border: '#edeff4 solid 1.5px',
                        borderRadius: 5,
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            borderBottom: '#edeff4 solid 1.5px',
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 2,
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: 'bold' }}>
                            Profile picture
                        </p>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Avatar
                                sx={{ width: 100, height: 100 }}
                                alt="Remy Sharp"
                                src="https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg"
                            />
                            <Box sx={{ flex: 1, display: 'flex', gap: 2 }}>
                                {avatarUrls.map((item, index) => {
                                    return <Avatar alt="avatar" src={item} />;
                                })}
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            borderBottom: '#edeff4 solid 1.5px',
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                            }}
                        >
                            <p style={{ margin: 0, fontWeight: 'bold' }}>
                                Username
                            </p>
                            <p style={{ margin: 0, fontSize: 14 }}>
                                {userName}
                            </p>
                        </Box>
                        <Box sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
                            Edit
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            borderBottom: '#edeff4 solid 1.5px',
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                            }}
                        >
                            <p style={{ margin: 0, fontWeight: 'bold' }}>
                                Email
                            </p>
                            <p style={{ margin: 0, fontSize: 14 }}>{email}</p>
                        </Box>
                        <Box sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
                            Edit
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: 'bold' }}>
                            Account type
                        </p>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'student'}>Student</MenuItem>
                            <MenuItem value={'teacher'}>Teacher</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 2,
                }}
            >
                <p style={{ margin: 0, color: '#586380', fontWeight: '600' }}>
                    Appearance
                </p>
                <Box
                    sx={{
                        width: '100%',
                        border: '#edeff4 solid 1.5px',
                        borderRadius: 5,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: 2,
                            alignItems: 'center',
                            borderBottom: '#edeff4 solid 1.5px',
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: 'bold' }}>Theme</p>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'student'}>Light</MenuItem>
                            <MenuItem value={'teacher'}>Dark</MenuItem>
                        </Select>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: 2,
                            alignItems: 'center',
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: 'bold' }}>
                            Language
                        </p>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'student'}>Light</MenuItem>
                            <MenuItem value={'teacher'}>Dark</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 2,
                }}
            >
                <p style={{ margin: 0, color: '#586380', fontWeight: '600' }}>
                    Notifications
                </p>
                <Box
                    sx={{
                        width: '100%',
                        border: '#edeff4 solid 1.5px',
                        borderRadius: 10,
                    }}
                >
                    <Box
                        sx={{
                            borderBottom: '#edeff4 solid 1.5px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 2,
                                borderBottom: '#edeff4 solid 1.5px',
                            
                            }}
                        >
                            <p style={{ margin: 0, fontWeight:"600"  }}>Study reminders</p>
                            <Switch />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 2,
                                alignItems: 'center',
                            }}
                        >
                            <p style={{ margin: 0, fontWeight:"600"  }}>
                                Choose when to receive study reminders
                            </p>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={'student'}>Light</MenuItem>
                                <MenuItem value={'teacher'}>Dark</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 2,
                            borderBottom: '#edeff4 solid 1.5px',
                        }}
                    >
                        <p style={{margin:0, fontWeight:"600"  }}>Email updates</p>
                        <Switch />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 2,
                            alignItems: 'center',
                        }}
                    >
                        <p style={{margin:0, fontWeight:"600" }}>Time zone</p>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'student'}>Light</MenuItem>
                            <MenuItem value={'teacher'}>Dark</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 2,
                }}
            >
                <p style={{ margin: 0, color: '#586380', fontWeight: '600' }}>
                    Account and privacy
                </p>
                <Box
                    sx={{
                        width: '100%',
                        border: '#edeff4 solid 1.5px',
                        borderRadius: 10,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 2,
                            alignItems: 'center',
                            borderBottom: '#edeff4 solid 1.5px',
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: '600' }}>
                            Unlink your Google account
                        </p>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 2,
                            alignItems: 'center',
                            borderBottom: '#edeff4 solid 1.5px',
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: '600' }}>
                            Unlink your Facebook account
                        </p>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 2,
                            alignItems: 'center',
                            borderBottom: '#edeff4 solid 1.5px',
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: '600' }}>Privacy</p>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 2,
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems:"flex-start"
                        }}>
                            <p style={{ margin: 0, fontWeight: '600' }}>
                                Delete your account
                            </p>
                            <p>
                                This will delete all your data and cannot be
                                undone.
                            </p>
                        </Box>
                        <Box sx={{
                            padding: "18px 20px",
                            background: "#b00020",
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: 3,
                            cursor:"pointer"
                        }}>
                            Delete account
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Setting;
