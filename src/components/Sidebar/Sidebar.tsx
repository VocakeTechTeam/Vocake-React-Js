// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Box, Divider } from '@mui/material'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import { makeStyles, createStyles } from '@mui/styles'
import { Avatar } from '@mui/material'
import Switch from './components/Switch'
import SidebarItem from './components/SidebarItem'
import { useLocation } from 'react-router-dom'
import CalendarIcon from '../../assets/icon/CalendarIcon'
import MedalIcon from '../../assets/icon/MedalIcon'
import MenuIcon from '../../assets/icon/MenuIcon'

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

const SidebarHeader = () => {
  const classes = sidebarStyles()
  return (
    <Box className={classes.sidebarHeader}>
      <Avatar
        alt='Remy Sharp'
        src='https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg'
      />
      <Box className={classes.sidebarHeaderText}>
        <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>Dương Huy Hoàng</Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: '#535763' }}>henryhoangduong@gmail.com</Typography>
      </Box>
    </Box>
  )
}

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
      padding: '0 10px 0 10px',
      height: '70px',
      '& .MuiAvatar-root': {
        border: 'black solid 1px',
        marginRight: '10px'
      }
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
