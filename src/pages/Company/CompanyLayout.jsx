import React from 'react'
import Container from '../../components/layouts/Container'
import Google from '../../assets/images/Company_pic/Google.webp'
import CompanyBanner from '../../assets/images/Company_pic/CompanyBanner.webp'
import { IoStar } from "react-icons/io5";
import { Creative } from './Creative';
import { Business } from './Business';
import { Slate } from './Slate';
import { Team } from './Team';
import { Offices } from './Offices';



export const CompanyLayout = () => {
  return (
    <>
<div className='bg-[#F3F7F6] pt-25'>
        <Container>
        <div className=' flex justify-between '>
            <div className=''>
                <h4 className='font-inter text-[14px] font-medium '>Slate Our Story </h4>
                <h3 className='text-[72px] font-archivo font-medium '>We’re on a <span className='bg-green pt-4 pb-4 pl-[12px] pr-[9px] rounded-lg'>mission to</span></h3>
                <h3 className='text-[72px] font-archivo font-medium '>power customers.</h3>
            </div>

            <div className=' items-center justify-center mt-[100px]'>
                <p className='font-inter text-[#3C4049] text-[18px] font-normal text-base w-[350px] h-[55px] mb-[32px]'>World class development and built for performance, Slate will deliver every time.</p>
                <div className='flex items-center  gap-3'>
                    <img src={Google} alt="Google" className='' /> 
                     <div className=' flex gap-1'>
                    <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar className='' />
                    </div>
                    <h6 className='font-inter text-[16px] text-[#9EA2AD]'> <span className='text-[#090C10]'>4.4</span>/5 - from 76 reviews</h6>

                </div>
            </div>
        </div>
        {/* img */}
        <div className='mt-[56px] mb-[120px]'>
            <img src={CompanyBanner} alt="CompanyBanner" />
        </div>
        {/* 2nd part > "Supporting smart */}

        <div className='flex justify-between'>
            <div className='text-[48px] font-archivo font-medium'>
                <h3 className='bg-green pl-2 pb-[10px] pr-[7px] rounded-lg'>Supporting smart </h3>
                <h3 className=''>business globally</h3>
            </div>
            <div className='max-w-[527px] font-inter text-[16px]  font-normal text-[#090C10]'>
                <div className='mb-[28px]'>Say goodbye to scattered tasks and inefficiencies. Slate simplifies your workflow, providing a centralized hub where you can seamlessly manage projects, tasks, and communication. Boost productivity, stay organized, and achieve more with ease.</div>
                <p className='w-[530px]'>Slate is designed to unleash your creative potential. Whether you're a  marketer, designer, or developer, our intuitive interface and robust features enable you to bring your ideas to life. From creating stunning visuals to crafting engaging content, let your creativity shine with Slate.</p>
            </div>
        </div>
    </Container>
</div>
        
        {/* Others All Section */}
        <Creative/>
        <Business/>
        <Slate/>
        <Team/>
        <Offices/>
    </>
  )
}
