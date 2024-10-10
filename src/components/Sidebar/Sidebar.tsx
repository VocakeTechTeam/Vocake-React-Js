// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Box } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Typography from '@mui/material/Typography'
import { makeStyles, createStyles } from '@mui/styles'
import { Avatar } from '@mui/material'

const itemlsits = [
  {
    title: 'Your words'
  },
  {
    title: 'Categories'
  },
  {
    title: 'Test'
  }
]

const SidebarHeader = () => {
  const classes = sidebarStyles()

  return (
    <Box className={classes.root}>
      <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      <Box>
        <Typography>Dương Huy Hoàng</Typography>
        <Typography>henryhoangduong@gmail.com</Typography>
      </Box>
    </Box>
  )
}

const Sidebar = () => {
  return (
    <Box sx={{ width: 250 }} role='presentation'>
      <SidebarHeader />

      <List>
        {itemlsits.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Sidebar

const sidebarStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
)
