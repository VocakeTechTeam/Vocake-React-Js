import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
const Switch = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography fontWeight='bold' color='#535763' fontSize='12px'>
        Colour Scheme
      </Typography>
    </Box>
  )
}

export default Switch

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '10px',
      display: 'flex',
      flexDirection: 'column'
    }
  })
)
