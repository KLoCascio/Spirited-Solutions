import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaHeart } from 'react-icons/fa'

import Details from './components/DrinkDetails'
import DrinkList from './components/DrinkList'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  
  return (
    <>
      <Header />
    
      <Nav />
    
      <Main />
    
      <Footer />
      
      <FaHeart />
     


    </>
  )
}

export default App
