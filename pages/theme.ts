import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#E63020',
      dark: '#ba000d',
      contrastText: '#000',
    },
    secondary: {
      light: '#32F97C',
      main: '#25D366',
      dark: '#1C9C4C',
      contrastText: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#000',
    },
  },
})
