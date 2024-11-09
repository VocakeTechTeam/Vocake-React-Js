import React from 'react'
import { makeStyles, createStyles } from '@mui/styles'
import { Avatar, Box, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { useNavigate } from 'react-router-dom'

export const SidebarHeader = () => {
  const nav = useNavigate()
  const classes = sidebarStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleLogout = (event: Event | React.SyntheticEvent) => {
    nav('/login')
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }
    prevOpen.current = open
  }, [open])

  return (
    <Stack direction='row' spacing={2} style={{ width: '100%', position: 'relative' }}>
      <div style={{ width: '100%', position: 'relative' }}>
        <Box
          ref={anchorRef}
          id='composition-button'
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          className={classes.sidebarHeader}
        >
          <Avatar
            alt='Remy Sharp'
            src='https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg'
          />
          <Box className={classes.sidebarHeaderText}>
            <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>Dương Huy Hoàng</Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: '#535763' }}>
              henryhoangduong@gmail.com
            </Typography>
          </Box>
        </Box>
        <Popper sx={{ width: '250px' }} open={open} anchorEl={anchorRef.current} role={undefined} transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id='composition-menu'
                    aria-labelledby='composition-button'
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  )
}

const sidebarStyles = makeStyles(() =>
  createStyles({
    sidebarHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px 10px 0px 10px',
      height: '70px',
      borderRadius: '10px',
      width: '100%',
      position: 'relative',
      '& .MuiAvatar-root': {
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
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  })
)
