import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { makeStyles, createStyles } from '@mui/styles'
import { Box, Divider } from '@mui/material'
import { theme } from '../../../theme'

interface SidebarItemProps {
  title: string
  icon: React.ReactNode
  isactive: boolean
  path: string
}

const SidebarItem = ({ title, icon, isactive = false }: SidebarItemProps) => {
  const classes = useStyles({ isactive })
  return (
    <Box
      sx={{
        background: isactive ? theme.palette.primary.main : 'transparent',
        color: isactive ? 'white' : 'black',
        '& svg': {
          fill: isactive ? 'white' : '#757575'
        }
      }}
      className={classes.root}
    >
      <ListItem key={title} disablePadding>
        <ListItemButton disableTouchRipple={true}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </Box>
  )
}

export default SidebarItem

const useStyles = makeStyles<{ isactive: boolean }>((isactive) =>
  createStyles({
    root: {
      '& .MuiListItem-root:hover': {
        background: theme.palette.primary.main,
        borderRadius: '10px'
      },
      borderRadius: '10px'
    }
  })
)
