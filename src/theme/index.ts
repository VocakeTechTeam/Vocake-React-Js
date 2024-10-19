import { createTheme } from '@mui/material'

const PALLETE_COLORS = {
  primary: '#55AD9B',
  secondary: '#FFFFFF',
  third: '#000000'
}

export const theme = createTheme({
  palette: {
    primary: {
      main: PALLETE_COLORS.primary
    },
    secondary: {
      main: PALLETE_COLORS.third
    }
  }
})
