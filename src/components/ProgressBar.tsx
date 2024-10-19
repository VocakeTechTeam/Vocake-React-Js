import { Box, useTheme } from '@mui/material'
import React from 'react'
import { makeStyles, createStyles } from '@mui/styles'
import { theme } from '../theme'

const ProgressBar = () => {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.progress} />
    </Box>
  )
}

export default ProgressBar

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      borderRadius: '25px',
      width: '40%',
      height: '15px',
      background: 'transparent',
      overflow: 'hidden',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    },
    progress: {
      width: '50%',
      height: '100%',
      background: theme.palette.primary.main,
      borderRadius: '25px'
    }
  })
)
