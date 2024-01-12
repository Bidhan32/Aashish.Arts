import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Defaultlayout = () => {
  return (
    <div>
      <Header/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default Defaultlayout
