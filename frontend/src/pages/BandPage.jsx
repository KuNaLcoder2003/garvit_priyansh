import React from 'react'
import { BandMembers } from '../components/BandMembers'
import { NavbarDemo } from '../components/NavbarDemo'
import Footer from '../components/Footer'

const BandPage = () => {
  return (
    <div>
      <NavbarDemo/>
      <BandMembers/>
      <Footer/>
    </div>
  )
}

export default BandPage
