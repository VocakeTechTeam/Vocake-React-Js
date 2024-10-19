import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import SearchBar from '../components/SearchBar'

const MainLayout = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Header>
          <SearchBar />
        </Header>
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%'
    },
    sidebar: {
      width: '20%',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    },
    main: {
      width: '80%',
      display: 'flex',
      flexDirection: 'column'
    }
  })
)