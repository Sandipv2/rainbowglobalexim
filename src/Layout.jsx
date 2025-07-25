import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
        <Navbar/>   
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout