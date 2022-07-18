import React from 'react'
import ReactDOM from 'react-dom/client'
import './Global.css'
import Home from './Pages/Home'
import { ChakraProvider } from '@chakra-ui/react'     

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
)
