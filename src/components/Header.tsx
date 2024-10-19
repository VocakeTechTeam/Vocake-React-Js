import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

type Props = {
  children: ReactNode
}

const Header = ({ children }: Props) => {
  const classes = useStyles()
  return <Box className={classes.root}>{children}</Box>
}

export default Header

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '10%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
)
