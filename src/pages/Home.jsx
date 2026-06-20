import React from 'react'
import OurBlogs from '../components/layouts/OurBlogs'
import StrategicChoice from '../components/layouts/StrategicChoice'
import Customers from '../components/layouts/Customers'
import Productivity from '../components/layouts/Productivity'

const Home = () => {
  return (
    <>
       <OurBlogs/>
       <StrategicChoice/>
       <Customers/>
       <Productivity/>
    </>
  )
}

export default Home
