import { TabPanel } from '@mui/lab'
import { Box, Paper } from '@mui/material'
import { NotFoundContainer } from './Home.style'
import { TabValueEnum } from './types'

export default function Warehouse() {
  return (
    <TabPanel value={TabValueEnum.WAREHOUSE}>
      <Paper style={{ border: '1px solid #C5CBDA' }}>
        <Box p={2}>
          <NotFoundContainer>No existen datos para mostrar</NotFoundContainer>
        </Box>
      </Paper>
    </TabPanel>
  )
}
