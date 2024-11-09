import { Box, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import CrossIcon from '../../assets/icon/CrossIcon'
import { SunIcon } from '../../assets/icon/SunIcon'
import TickIcon from '../../assets/icon/TickIcon'
import SpeakerIcon from '../../assets/icon/SpeakerIcon'
import image from '../../assets/image.png'
import { TextField } from '@mui/material'

const cards = [
  {
    id: 1,
    width: '250px',
    frontHTML: (
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box sx={{ alignItems: 'flex-start', display: 'flex', width: '90%' }}>
          <SpeakerIcon />
        </Box>
        <SunIcon width='96px' height='96px' />
        <Box>
          <Typography>sun (n)</Typography>
          <Typography>/sʌn/</Typography>
          <Typography>A big, bright ball in the sky that shines and warms the Earth</Typography>
          <Typography>Make summer fun like the sun!</Typography>
        </Box>
        <Box
          sx={{
            width: '90%',
            justifyContent: 'space-between',
            display: 'flex',
            marginTop: '30px',
            padding: '5px'
          }}
        >
          <CrossIcon height='32px' width='32px' />
          <TickIcon height='33px' width='33px' />
        </Box>
      </Box>
    ),
    backHTML: (
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        Mặt trời
      </Box>
    )
  }
]

const Home = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box>
        <Typography>ironic (a.)</Typography>
        <Typography>add to list</Typography>
        <Typography>share</Typography>
        <Typography>intermediate</Typography>
        <Typography>unexpected this funny</Typography>
        <Typography>It’s ironic that Sarah, the librarian, got fined for overdue books.</Typography>
        <Typography>&quot;Thật trớ trêu khi Sarah, thủ thư, lại bị phạt vì mượn sách quá hạn.&quot;</Typography>
        <Typography>words family</Typography>
        <Typography>Advanced uses</Typography>
        <Typography>synonyms</Typography>
        <Typography>collcations</Typography>
        <img src={image} alt='My Local ' />
        <Box>
          <Typography>Quick Practice</Typography>
          <TextField />
          <Typography>Check</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    main: {
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '40px',
      '& >*': {
        marginRight: '25px'
      }
    }
  })
)
