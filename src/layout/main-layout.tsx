import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import { Header } from '../components/Header'

const MainLayout = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.firstContainer}>
        <Header />
      </Box>
      <Box className={classes.secondContainer}>
        <Box className={classes.sidebar}>
          <Sidebar />
        </Box>
        <Box className={classes.main}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default MainLayout

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh'
    },
    firstContainer: {
      background: '#55AD9B',
      width: '100%',
      height: '8vh',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 4px 8px 0px' // Shadow at the bottom
    },
    secondContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '92vh',
    },
    sidebar: {
      width: '20%',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'rgba(99, 99, 99, 0.2) 4px 0px 8px '
    },
    main: {
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      padding: 10
    }
  })
)
