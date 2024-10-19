import React, { ReactNode, useState } from 'react'
import { Box, styled, Typography, useTheme } from '@mui/material'
import image1 from '../../assets/image1.png'
import { makeStyles, createStyles } from '@mui/styles'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import GoogleIcon from '../../assets/icon/GoogleIcon'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const theme = useTheme()
  const nav = useNavigate()
  const styles = useStyles(theme)
  const handleLogin = () => {
    nav('/')
  }
  return (
    <Box className={styles.root}>
      <Box className={styles.container1}>
        <Box className={styles.container3}>
          <Typography className={styles.header}>Welcome to Vocake!</Typography>
          <Box className={styles.iconContainer}>
            <Input icon={<EmailOutlinedIcon />} placeholder='Enter your email' />
            <Input icon={<LockOutlinedIcon />} placeholder='Enter your password' />
          </Box>
          <Box className={styles.forgotContainer}>
            <Typography>Forgot password?</Typography>
            <Typography sx={{ color: '#C2A226', fontWeight: 'bold' }}> Click here</Typography>
          </Box>
          <Box className={styles.btnContainer}>
            <Box className={styles.loginBtn} onClick={handleLogin}>
              Log in
            </Box>
            <Box className={styles.googleBtn}>
              <GoogleIcon />
              Sign in with google
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

export default Login

/* eslint-disable  @typescript-eslint/no-explicit-any */
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      border: `1px solid ${theme.palette.primary.main}`,
      display: 'flex',
      flexDirection: 'row'
    },
    container1: {
      background: '#F5F5F9',
      width: '50%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container2: {
      background: '#FEF3E2',
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container3: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%'
    },
    header: {
      color: theme.palette.primary.main,
      fontSize: '32px',
      fontWeight: 'bold'
    },
    iconContainer: {
      width: '100%',
      gap: '20px',
      '& > *': {
        marginTop: '15px'
      }
    },
    loginBtn: {
      background: 'black',
      color: 'white',
      borderRadius: '20px',
      height: '35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    googleBtn: {
      border: '#8c8a8a solid 1px',
      borderRadius: '20px',
      height: '35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    btnContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      cursor: 'pointer',
      '& > *': {
        marginTop: '10px'
      }
    },
    forgotContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%',
      margin: '30px',
      '& > *': { marginRight: '15px' }
    }
  })
)

type InputProps = {
  icon: ReactNode
  placeholder: string
}

const Input = ({ icon, placeholder }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <Box
      sx={{
        background: '#F1F1F1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        border: '#8c8a8a solid 1px',
        width: '100%',
        borderRadius: '50px',
        padding: '10px',
        '& input': {
          border: 'transparent',
          flex: 1,
          background: 'transparent'
        },
        '& input:focus': {
          border: 'transparent',
          outline: 'none',
          flex: 1
        },
        '& svg': {
          width: '12px',
          height: '12px'
        }
      }}
      onClick={() => {
        setIsFocus(!isFocus)
      }}
    >
      <input placeholder={placeholder} type='text' />
      {icon}
    </Box>
  )
}
