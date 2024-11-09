// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Box, Divider } from '@mui/material'
import List from '@mui/material/List'
import { makeStyles, createStyles } from '@mui/styles'
import Switch from './components/Switch'
import SidebarItem from './components/SidebarItem'
import { useLocation } from 'react-router-dom'
import CalendarIcon from '../../assets/icon/CalendarIcon'
import MedalIcon from '../../assets/icon/MedalIcon'
import MenuIcon from '../../assets/icon/MenuIcon'

const itemlsits = [
  {
    title: 'Search',
    path: '/',
    icon: <CalendarIcon />
  },
  {
    title: 'My list',
    path: '/categories',
    icon: <MedalIcon />
  },
  {
    title: 'Explore',
    path: '/Statistic',
    icon: <MenuIcon />
  },
  {
    title: 'Setting',
    path: '/Statistic',
    icon: <MenuIcon />
  }
]

const Sidebar = () => {
  const classes = sidebarStyles()
  const location = useLocation()
  return (
    <Box className={classes.root}>
      <Box style={{ width: '100%' }}>
        <List >
          {itemlsits.map((item, index) => (
            <SidebarItem
            style={{marginTop:"10px"}}
              key={index}
              title={item.title}
              icon={item.icon}
              path={item.path}
              isactive={location.pathname === item.path ? true : false}
            />
          ))}
        </List>
      </Box>
      <Box className={classes.sidebarBottom}>
        <Divider />
        <Switch />
      </Box>
    </Box>
  )
}

export default Sidebar

const sidebarStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: '10px'
    },
    sidebarHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px 10px 0px 10px',
      height: '70px',
      borderRadius: '10px',
      width: '100%',
      '& .MuiAvatar-root': {
        border: 'black solid 1px',
        marginRight: '10px',
        background: 'black'
      },
      '&:hover': {
        background: '#d6f4ef'
      },
      cursor: 'pointer'
    },
    sidebarBottom: {
      marginTop: 'auto',
      marginBottom: '30px'
    }
  })
)
