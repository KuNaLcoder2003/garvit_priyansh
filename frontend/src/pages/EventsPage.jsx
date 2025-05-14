import React from 'react'
import { LayoutGridDemo } from '../components/LayoutGridDemo'
import { NavbarDemo } from '../components/NavbarDemo'
import Footer from '../components/Footer'
import Gallery, { DummyContent } from './Gallery'
import Events from '../components/Events'

const EventsPage = () => {
  return (
    <div>


      <NavbarDemo />
      <h1 className='text-4xl font-bold text-center p-2 mt-[4rem]'>Our Events</h1>
      {/* <LayoutGridDemo /> */}
      {/* <DummyContent /> */}

      <Events/>
      
      <Footer />

    </div>
  )
}

export default EventsPage
