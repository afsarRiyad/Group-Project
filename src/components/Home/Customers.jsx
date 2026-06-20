import React from 'react'
import Container from '../layouts/Container';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import manone from '../../assets/images/manone.webp'
import manTwo from '../../assets/images/mantwo.webp'
import manthree from '../../assets/images/manthree.webp'
import { FaArrowRight } from "react-icons/fa6";

const Customers = () => {
  return (
    <>
     <Container>
        <div className='mt-16 lg:mt-30 px-4 sm:px-0 '>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-y-6 mb-12 '>
                <div className='max-w-[478px]'>
                    <p className='primaryTxt font-medium mb-5'>Creative Freedom</p>
                    <h3 className='headingTxt text-3xl md:text-[42px] font-medium leading-tight'>
                      <span className='bg-[#CDFA89] px-2 py-2 mr-2 inline-block md:inline'>Customers</span>
                      do better with our support
                    </h3>
                </div>
                <div>
                    <Link className='flex gap-x-3.5 items-center learnTxt text-primary bg-[#EBECEF] px-5 py-2.5 rounded-[70px]'>
                      Get Started <FaRegArrowAltCircleRight />
                    </Link>
                </div>             
            </div>
            <div className='overflow-x-auto scrollbar-none'>
                <ul className='flex gap-x-4 md:gap-x-7 primaryTxt mb-12 whitespace-nowrap pb-2 md:pb-0'>
                    <Link> <li className='border-1 border-[#d3d2d2] rounded-[5px] py-1.5 px-3 hover:bg-[#F6F7F8]'>Latest</li></Link>
                    <Link> <li className='border-1 border-[#d3d2d2] rounded-[5px] py-1.5 px-3 hover:bg-[#F6F7F8]'>Payments</li></Link>
                    <Link> <li className='border-1 border-[#d3d2d2] rounded-[5px] py-1.5 px-3 hover:bg-[#F6F7F8]'>Local</li></Link>
                    <Link> <li className='border-1 border-[#d3d2d2] rounded-[5px] py-1.5 px-3 hover:bg-[#F6F7F8]'>Small Business</li></Link>
                </ul>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-8 pb-30'>
                <div className='flex flex-col items-start w-full'>
                    <img src={manone} alt="manone" className='w-full object-cover rounded-lg' />
                    <h3 className='headingTxt text-[20px] font-medium mt-6'>Customer Case Study</h3>
                    <p className='primaryTxt leading-6 max-w-[337px] mt-4'>World class development and built for performance, Slate will deliver to the highest standard.</p>
                    <button className='flex items-center gap-x-2 text-base font-medium text-black mt-[26px] group'>
                        Learn More
                        <FaArrowRight className='text-white bg-black p-1 rounded-full w-6 h-6 transition-transform group-hover:translate-x-0.5' />
                    </button>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <img src={manTwo} alt="manTwo" className='w-full object-cover rounded-lg' />
                    <h3 className='headingTxt text-[20px] font-medium mt-6'>Customer Case Study</h3>
                    <p className='primaryTxt leading-6 max-w-[370px] mt-4'>Slate offers a comprehensive suite of tools and features to meet your unique needs.</p>
                    <button className='flex items-center gap-x-2 text-base font-medium mt-[26px] text-black group'>
                        Learn More
                        <FaArrowRight className='text-white bg-black p-1 rounded-full w-6 h-6 transition-transform group-hover:translate-x-0.5' />
                    </button>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <img src={manthree} alt="manthree" className='w-full object-cover rounded-lg' />
                    <h3 className='headingTxt text-[20px] font-medium mt-6'>Customer Case Study</h3>
                    <p className='primaryTxt leading-6 max-w-[337px] mt-4'>Say goodbye to clunky interfaces and hello to a seamless user experience.</p>
                    <button className='flex items-center mt-[26px] gap-x-2 text-base font-medium text-black group'>
                        Learn More
                        <FaArrowRight className='text-white bg-black p-1 rounded-full w-6 h-6 transition-transform group-hover:translate-x-0.5' />
                    </button>
                </div>
            </div>
        </div>
     </Container>
    </>
  )
}

export default Customers;