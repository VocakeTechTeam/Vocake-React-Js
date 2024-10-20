import React, { ChangeEvent, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import image1 from '../../assets/image1.png'
import { Input } from '../../components/Input'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const nav = useNavigate()
  const [user, setUser] = useState({
    email: null,
    password: null,
    password_retry: null
  })
  const [emailError, setEmailError] = useState<null | string>(null)
  const [passwordError, setPasswordError] = useState<null | string>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordError(null)
    setEmailError(null)
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSignUp = () => {
    if (!user.email) {
      setEmailError('Please type your password')
    } else if (user.password !== user.password_retry) {
      setPasswordError('Password unmatched')
    }
  }
  const styles = useStyles()
  return (
    <Box className={styles.root}>
      <Box className={styles.container1}>
        <Box className={styles.container3}>
          <Typography
            style={{
              width: '100%',
              alignItems: 'flex-start',
              display: 'flex',
              fontWeight: 'bold',
              fontSize: '24px'
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
            <Box className={styles.singUpbtn} onClick={handleSignUp}>
              {' '}
              Signup
            </Box>
            <Box
              className={styles.haveAccountbtn}
              onClick={() => {
                nav('/login')
              }}
            >
              Already have an account? Sign in!
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.container2}>
        <img src={image1} alt='Vocake' />
      </Box>
    </Box>
  )
}

export default Register

/* eslint-disable  @typescript-eslint/no-explicit-any */
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      '& >*': {
        width: '50%'
      }
    },
    container1: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    container2: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      background: '#55AD9B',
      borderRadius: ' 0 0 0 100px'
    },
    container3: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%'
    },
    header: {
      width: '100%'
    },
    inputContainer: {
      marginTop: '10px',
      '& > *': {
        marginTop: '10px'
      }
    },
    btnContainer: {
      marginTop: '20px',
      '& > *': {
        marginTop: '10px'
      }
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
      cursor: 'pointer'
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
      cursor: 'pointer'
    }
  })
)
