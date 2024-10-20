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
import { MenuListComposition } from '../Menu'
import { SidebarHeader } from './components/SidebarHeader'

const itemlsits = [
  {
    title: 'Your words',
    path: '/',
    icon: <CalendarIcon />
  },
  {
    title: 'Categories',
    path: '/categories',
    icon: <MedalIcon />
  },
  {
    title: 'Statistic',
    path: '/Statistic',
    icon: <MenuIcon />
  }
]

const Sidebar = () => {
  const classes = sidebarStyles()
  const location = useLocation()
  return (
    <Box className={classes.root}>
      <Box>
        <SidebarHeader />
        <List>
          {itemlsits.map((item, index) => (
            <SidebarItem
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
      flexDirection: 'column'
    },
    sidebarHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px 10px 0px 10px',
      height: '70px',
      borderRadius: '10px',
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
    sidebarHeaderText: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    sidebarBottom: {
      marginTop: 'auto',
      marginBottom: '30px'
    }
  })
)
