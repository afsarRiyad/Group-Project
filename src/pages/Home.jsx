import React from 'react'
import OurBlogs from '../components/Home/OurBlogs'
import StrategicChoice from '../components/Home/StrategicChoice'
import Customers from '../components/Home/Customers'
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
