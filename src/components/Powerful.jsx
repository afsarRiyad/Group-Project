import React from 'react'
import Container from './layouts/Container'
import Powerful1 from "../assets/images/Powerful.png"
import Solution1 from "../assets/images/Solution1.png"
import { LuCircleCheckBig } from 'react-icons/lu'
import Faq from './Faq'
import { FaCircleArrowRight } from 'react-icons/fa6'

const Powerful = () => {
  return (
    <div>
        <Container>

            <div className='flex gap-37.5'>
                <div className='pt-15'>
                    <h3 className='text-[40px] text-[#002E25] font-medium font-archivo pt-[65px] pb-6.5'><span className='bg-green px-2 py-2 rounded-lg'>Provide powerful</span> solutions at all times.</h3>
                    <p className='text-[16px] text-[#3C4049] font-inter pb-6.5'>Seamless integrations and uninterrupted service. You can trust Slate to deliver every time.</p>
                    <p className='text-[16px] text-[#3C4049] font-inter pb-8'>Look no further for the solution to your needs.</p>
                    <div className='flex text-[14px] text-[#002E25] font-medium'>
                        <p className='flex items-center gap-3 pr-7'><LuCircleCheckBig/> Beautiful sections</p>
                        <p className='flex items-center gap-3'><LuCircleCheckBig/> Suited to many businesses</p>
                    </div>
                    <div>
                        <button className="flex bg-black rounded-4xl px-5 py-2 mt-12 items-center text-white  gap-2 text-[14px] font-inter font-medium">Learn More <FaCircleArrowRight/> </button>
                    </div>
                </div>
                <div className='pt-1 pb-30 w-full'>
                    <img src={Powerful1} alt="Powerful" />
                </div>
            </div>


            <div className='flex pb-[96px]'>
                <div className='w-full pt-[143px]'>
                    <img src={Solution1} alt="Solution1" />
                </div>
                <div className='pt-[177px]'>
                    <p className="text-[14px] text-[#3C4049] font-inter font-medium">Creative Freedom</p>
                    <h3 className='text-[40px] text-[#002E25] font-medium font-archivo pt-[16px] pb-6.5'><span className='bg-green px-2 py-2 rounded-lg'>Build a solution</span> that wins you more customers.</h3>
                    <p className='text-[16px] text-[#3C4049] font-inter pb-7.5'>World class development and built for performance, Slate will deliver to the highest standard, each and every time.</p>
                    <div>
                        <Faq/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Powerful