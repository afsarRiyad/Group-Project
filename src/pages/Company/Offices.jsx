import React from 'react'
import Container from '../../components/layouts/Container'
import Sydney from '../../assets/images/Company_pic/Sydney.webp'
import NewYork from '../../assets/images/Company_pic/NewYork.webp'
import Egypt from '../../assets/images/Company_pic/Egypt.webp'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

export const Offices = () => {
  return (
    <>
    <Container>

              <div className="main mb-[150px]">
                <div className="text-center mb-[56px] ">
                  <h6 className="font-inter text-[16px] font-medium">Slate Locations</h6>
                  <h4 className="font-archivo text-[48px] font-medium text-center">
                    Find our friendly offices
                  </h4>
                 <h3 className='font-archivo text-[48px] font-medium'>all around <span className='bg-green'>the globe</span></h3>
                </div>
        
                <div className='flex justify-center gap-7 '>
                  
                    <div className='items-center text-center'>
                       <img src={Sydney} alt="Sydney"  className='ml-[35%] mb-[32px] mt-[40px]'/>
                       <h3 className='font-inter text-[20px] font-medium mb-[19px]'>Sydney</h3>
                       <p className=' w-[255px] ml-[40px] font-inter text-[14px] font-normal'>A company with a global footprint - we </p>
                      <span className='font-inter text-[14px] font-normal ml-[40px] '>can tailor solutions to your market.</span>
                       <Link to='Learn More' className='flex gap-3 items-center justify-center text-[#002E25] mt-[28px]'>View Location<FaArrowAltCircleRight  className='mt-1'/></Link>
                    </div>
                  

                
                    <div className='items-center text-center'>
                       <img src={NewYork} alt="NewYork"  className='ml-[35%] mb-[32px] mt-[40px]'/>
                       <h3 className='font-inter text-[20px] font-medium mb-[19px]'>New York</h3>
                       <p className=' w-[255px] ml-[40px] font-inter text-[14px] font-normal'>A company with a global footprint - we  </p>
                      <span className='font-inter text-[14px] font-normal  ml-[40px]'>can tailor solutions to your market.</span>
                       <Link to='Learn More' className='flex gap-3 items-center justify-center text-[#002E25] mt-[28px]'>View Location<FaArrowAltCircleRight  className='mt-1'/></Link>
                    </div>
                
                  
                    <div className='items-center text-center'>
                       <img src={Egypt} alt="Egypt"  className='ml-[35%] mb-[32px] mt-[40px]'/>
                       <h3 className='font-inter text-[20px] font-medium mb-[19px]'>Egypt</h3>
                       <p className=' w-[255px] ml-[40px] font-inter text-[14px] font-normal'>A company with a global footprint - we </p>
                      <span className='font-inter text-[14px] font-normal  ml-[40px]'>can tailor solutions to your market.</span>
                       <Link to='Learn More' className='flex gap-3 items-center justify-center text-[#002E25] mt-[28px]'>View Location <FaArrowAltCircleRight  className='mt-1'/></Link>
                    </div>
                 
                </div>
              </div>
    </Container>
    
    </>
  )
}
