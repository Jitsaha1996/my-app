
import {  createTheme, ThemeProvider} from '@mui/material'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import Header from './Header';
import { Home } from './Home';
interface Props{
    children?:React.ReactNode;
}
  
export const PortfolioProvider = (props:Props) => {
    const theme=createTheme({
        palette: {
            primary: {
              main: '#0052cc',
            },
            secondary: {
              main: '#edf2ff',
            },
          },
    })
  return (
    <>
    <ThemeProvider theme={theme}>
       
           <BrowserRouter>
           <Header/>
           <Home/>
           {/* <Routes>
           <Route path="/create" element={<Home/>} />
           <Route path="/" element={<Home/>} />
           </Routes> */}
           </BrowserRouter>

        

    </ThemeProvider>
    </>
  )
}
