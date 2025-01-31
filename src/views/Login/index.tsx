import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import image1 from '../../assets/image1.png';
import { makeStyles, createStyles } from '@mui/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '../../assets/icon/GoogleIcon';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Input } from '../../components/Input';
import { useAuth } from '../../context/AuthContext';
import SpinModal from '../../components/SpinModal';

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL || '',
    process.env.REACT_APP_SUPABASE_ANON_KEY || '',
);

const Login = () => {
    const theme = useTheme();
    const nav = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const { login, isAuth } = useAuth();
    const styles = useStyles(theme);

    useEffect(() => {
        if (isAuth) nav('/');
    }, [isAuth]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleLogin = async () => {
        setLoading(true);
        await login(user.email, user.password);
        setLoading(false);
    };
    const handleGoogleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        nav('/');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <Box
            className={styles.root}
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key == 'Enter') {
                    e.preventDefault();
                    handleLogin();
                }
            }}
        >
            <SpinModal isOpen={loading} />
            <Box className={styles.container1}>
                <Box className={styles.container3}>
                    <Typography
                        className={styles.header}
                        style={{ fontSize: '32px', fontWeight: 'bold' }}
                    >
                        Welcome to Vocake!
                    </Typography>
                    <Box className={styles.iconContainer}>
                        <Input
                            handleChange={handleChange}
                            icon={<EmailOutlinedIcon />}
                            type="text"
                            placeholder="Enter your email"
                            name="email"
                        />
                        <Input
                            handleChange={handleChange}
                            icon={<LockOutlinedIcon />}
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                        />
                    </Box>
                    <Box className={styles.forgotContainer}>
                        <Typography>Forgot password?</Typography>
                        <Typography
                            sx={{
                                color: '#C2A226',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                            }}
                        >
                            Click here
                        </Typography>
                    </Box>
                    <Box className={styles.btnContainer}>
                        <Box className={styles.loginBtn} onClick={handleLogin}>
                            Log in
                        </Box>
                        <Box className={styles.googleBtn}>
                            <GoogleIcon />
                            Sign in with google (Coming soon)
                        </Box>
                        <Typography
                            fontSize={12}
                            color="gray"
                            fontWeight={'600'}
                        >
                            OR
                        </Typography>
                        <Box
                            className={styles.signUpBtn}
                            onClick={() => {
                                nav('/register');
                            }}
                        >
                            Sign Up
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.container2}>
                <img src={image1} alt="Vocake" />
                <p>Vocabulary is as easy as a piece of cake </p>
            </Box>
        </Box>
    );
};

export default Login;

/* eslint-disable  @typescript-eslint/no-explicit-any */
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
        },
        container1: {
            background: '#F5F5F9',
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                width: '100%',
            },
        },
        container2: {
            background: '#FEF3E2',
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
            flexDirection: 'column',
            '& p': {
                fontWeight: 'bold',
            },
        },
        container3: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '80%',
        },
        header: {
            color: theme.palette.primary.main,
            fontSize: '32px',
            fontWeight: 'bold',
        },
        iconContainer: {
            width: '100%',
            gap: '20px',
            '& > *': {
                marginTop: '15px',
            },
        },
        loginBtn: {
            background: '#FCBC05',
            borderRadius: '20px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            fontWeight: '600',
        },
        signUpBtn: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '20px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            fontWeight: '600',
        },
        googleBtn: {
            border: '#8c8a8a solid 1px',
            borderRadius: '20px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // cursor: 'pointer',
            '& > *': {
                marginRight: '10px',
            },
        },
        btnContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            cursor: 'pointer',
            '& > *': {
                marginTop: '10px',
            },
        },
        forgotContainer: {
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%',
            margin: '20px',
            gap: '10px',
        },
    }),
);
