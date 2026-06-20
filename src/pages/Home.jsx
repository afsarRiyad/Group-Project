import React from 'react'
import OurBlogs from '../components/Home/OurBlogs'
import StrategicChoice from '../components/Home/StrategicChoice'
import Customers from '../components/Home/Customers'
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
