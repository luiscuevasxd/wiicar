import MenuIcon from '@mui/icons-material/Menu'
import SettingsPowerIcon from '@mui/icons-material/SettingsPower'
import { Box, Button, Grid } from '@mui/material'
import Image from 'next/image'

export default function Header() {
  return (
    <Box
      py={2}
      style={{ backgroundColor: '#fff' }}
      borderBottom={`1px solid #C5CBDA`}
    >
      <Grid container alignItems='center'>
        <Grid item xs={4}>
          <Box pl={3}>
            <MenuIcon style={{ color: '#E63020' }} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display='flex' width='100%' justifyContent='center'>
            <Image src='/logo.jpg' alt='WiiCar' width={130} height={39} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display='flex' width='100%' justifyContent='flex-end' pr={3}>
            <Button
              size='small'
              style={{
                borderRadius: 100,
                color: '#E63020',
                border: '1px solid #E63020',
                padding: '4px 8px',
              }}
              startIcon={<SettingsPowerIcon />}
            >
              Salir
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
