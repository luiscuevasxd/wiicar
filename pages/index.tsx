import { ThemeProvider } from '@emotion/react'
import { Home as HomeComponent } from 'components'
import Head from 'next/head'
import { theme } from './theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>WiiCar</title>
        <meta name='description' content='Prueba de WiiCar red5g' />
        <meta name='author' content='Luis David Cuevas Rojas' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeComponent />
    </ThemeProvider>
  )
}
