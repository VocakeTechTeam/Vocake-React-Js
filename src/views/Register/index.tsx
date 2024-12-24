import { ChangeEvent, useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import image1 from '../../assets/image1.png';
import { Input } from '../../components/Input';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useNavigate } from 'react-router-dom';
import { signUpService, verifyOtpService } from '../../services';
import SpinModal from '../../components/SpinModal';
import { useAuth } from '../../context/AuthContext';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
import { useSelector } from 'react-redux';
import VerificationModal from './components/VerificationModal';

const Register = () => {
    const theme = useTheme();
    const { isAuth } = useAuth();
    const dispatch = useDispatch();
    const nav = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const onboard = useSelector((state: RootState) => state.userOnboard);
    const [otp, setOtp] = useState<string>('');
    const handleOtpChange = (otp: string) => {
        setOtp(otp);
    };
    const handleUpdate = (name: string, value: string) => {
        return dispatch(updateOnboard({ name, value }));
    };

    const [emailError, setEmailError] = useState<null | string>(null);
    const [passwordError, setPasswordError] = useState<null | string>(null);
    const [phoneNumberError, setPhoneNumberError] = useState<null | string>(
        null,
    );
    const [conuntryError, setCountryError] = useState<null | string>(null);
    const [cityError, setCityError] = useState<null | string>(null);
    const [fullNameError, setFullNameError] = useState<null | string>(null);
    useEffect(() => {
        if (isAuth) {
            nav('/');
        }
    }, []);
    useEffect(() => {
        const verifyOtp = async () => {
            if (otp.length == 6) {
                setLoading(true);
                try {
                    const res = await verifyOtpService(onboard.email, otp);
                    console.log(res);
                    if (res) {
                        nav('/onboard');
                    }
                    setIsModalOpen(false);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                    setIsModalOpen(false);
                }
            }
        };
        verifyOtp();
    }, [otp]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordError(null);
        setEmailError(null);
        setPhoneNumberError(null);
        setCityError(null);
        setCountryError(null);
        setFullNameError(null);
        handleUpdate(e.target.name, e.target.value);
    };
    const handleSignUp = async () => {
        if (!onboard.email || !onboard.email?.includes('@')) {
            setEmailError('Please type your password');
        } else if (
            !onboard.phoneNumber ||
            !/^[0-9]+$/.test(onboard.phoneNumber)
        ) {
            setPhoneNumberError('Please type your phone number');
        } else if (!onboard.city) {
            setCityError('Please type your city');
        } else if (!onboard.country) {
            setCityError('Please type your country');
        } else if (!onboard.fullName) {
            setFullNameError('Please type your full name');
        } else if (!onboard.password) {
            setPasswordError('Please type your password');
        } else if (onboard.password !== onboard.password_retry) {
            setPasswordError('Password unmatched');
        } else {
            try {
                setLoading(true);
                const res = await signUpService(onboard.email);
                setLoading(false);
                if (res) {
                    setIsModalOpen(true);
                }
            } catch {}
        }
    };
    const styles = useStyles(theme);
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <Box className={styles.root}>
            <VerificationModal
                isOpen={isModalOpen}
                handleChange={handleOtpChange}
                hanldeClose={handleModalClose}
            />
            <SpinModal isOpen={loading} />
            <Box className={styles.container1}>
                <Box className={styles.container3}>
                    <Typography
                        style={{
                            width: '100%',
                            alignItems: 'flex-start',
                            display: 'flex',
                            fontWeight: 'bold',
                            fontSize: '24px',
                        }}
                    >
                        Create account
                    </Typography>
                    <Box className={styles.inputContainer}>
                        <Input
                            errorMessage={emailError}
                            handleChange={handleChange}
                            name={'email'}
                            icon={<MailOutlineIcon />}
                            placeholder={'Enter your email'}
                        />
                        <Input
                            errorMessage={phoneNumberError}
                            handleChange={handleChange}
                            name={'phoneNumber'}
                            icon={<LocalPhoneOutlinedIcon />}
                            placeholder={'Enter your phone number'}
                        />
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Input
                                errorMessage={cityError}
                                handleChange={handleChange}
                                name={'city'}
                                icon={<LocationCityOutlinedIcon />}
                                placeholder={'Enter your city'}
                            />
                            <Input
                                errorMessage={conuntryError}
                                handleChange={handleChange}
                                name={'country'}
                                icon={<OutlinedFlagIcon />}
                                placeholder={'Enter your country'}
                            />
                        </Box>
                        <Input
                            errorMessage={fullNameError}
                            handleChange={handleChange}
                            name={'fullName'}
                            icon={<BadgeOutlinedIcon />}
                            placeholder={'Enter your full name'}
                        />
                        <Input
                            errorMessage={passwordError}
                            handleChange={handleChange}
                            name={'password'}
                            type={'password'}
                            icon={<LockOutlinedIcon />}
                            placeholder={'Enter your password'}
                        />

                        <Input
                            errorMessage={passwordError}
                            handleChange={handleChange}
                            name={'password_retry'}
                            type={'password'}
                            icon={<LockOutlinedIcon />}
                            placeholder={'Retry password'}
                        />
                    </Box>
                    <Box className={styles.btnContainer}>
                        <Box
                            className={styles.singUpbtn}
                            onClick={handleSignUp}
                        >
                            Signup
                        </Box>
                        <Box
                            className={styles.haveAccountbtn}
                            onClick={() => {
                                nav('/login');
                            }}
                        >
                            Already have an account? Sign in!
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.container2}>
                <img src={image1} alt="Vocake" />
            </Box>
        </Box>
    );
};

export default Register;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            '& >*': {
                width: '50%',
            },
        },
        container1: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            [theme.breakpoints.down('md')]: {
                width: '100%',
            },
        },
        container2: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            background: '#55AD9B',
            borderRadius: ' 0 0 0 100px',
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        container3: {
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
        },
        header: {
            width: '100%',
        },
        inputContainer: {
            marginTop: '10px',
            '& > *': {
                marginTop: '10px',
            },
        },
        btnContainer: {
            marginTop: '20px',
            '& > *': {
                marginTop: '10px',
            },
        },
        singUpbtn: {
            width: '100%',
            borderRadius: '30px',
            background: 'black',
            color: 'white',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        haveAccountbtn: {
            width: '100%',
            borderRadius: '30px',
            background: 'white',
            color: 'black',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '#b2b0b0 solid 1px',
            cursor: 'pointer',
        },
    }),
);
