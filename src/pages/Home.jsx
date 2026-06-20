import React from 'react'
import OurBlogs from '../components/layouts/OurBlogs'
import StrategicChoice from '../components/layouts/StrategicChoice'
import Customers from '../components/layouts/Customers'
import Productivity from '../components/layouts/Productivity'
import Testimonials from '../components/layouts/Testimonials'

const Home = () => {
  return (
    <>
       <OurBlogs/>
       <StrategicChoice/>
       <Customers/>
       <Productivity/>
       <Testimonials/>
    </>
  )
}

export default Home
