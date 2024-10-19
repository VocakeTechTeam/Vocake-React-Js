import { useState, ReactNode } from 'react'
import { Box } from '@mui/material'

type InputProps = {
  icon: ReactNode
  placeholder: string
}

export const Input = ({ icon, placeholder }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <Box
      sx={{
        background: '#F1F1F1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        border: '#8c8a8a solid 1px',
        width: '100%',
        borderRadius: '50px',
        padding: '10px',
        '& input': {
          border: 'transparent',
          flex: 1,
          background: 'transparent'
        },
        '& input:focus': {
          border: 'transparent',
          outline: 'none',
          flex: 1
        },
        '& svg': {
          width: '12px',
          height: '12px'
        }
      }}
      onClick={() => {
        setIsFocus(!isFocus)
      }}
    >
      <input placeholder={placeholder} type='text' />
      {icon}
    </Box>
  )
}
