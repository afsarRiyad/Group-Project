import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";
import Container from '../../components/layouts/Container';
import CompanyLogo1 from '../../assets/images/Company_pic/CompanyLogo1.webp'
import CompanyLogo2 from '../../assets/images/Company_pic/CompanyLogo2.webp'
import CompanyLogo3 from '../../assets/images/Company_pic/CompanyLogo3.webp'
import CompanyLogo4 from '../../assets/images/Company_pic/CompanyLogo4.webp'
import CompanyLogo5 from '../../assets/images/Company_pic/CompanyLogo5.webp'

export const Slate = () => {
  return (
    <>
    <div className='bg-[#F3F7F6] py-25 flex items-center mb-10'>
         <Container>
          <div className='main flex items-center justify-between '>
        <div>
            <h6 className='font-inter font-medium text-[14px] mb-[19px]'>Creative Freedom</h6>
            <h4 className='max-w-[340px] font-archivo font-medium text-[48px] bg-green pl-2 pr-[6px] pb-[10px] rounded-lg'>Slate Template</h4>
            <h3 className='font-archivo font-medium text-[48px] mb-[36px]'>Partners + Clients</h3>
            <p className='max-w-[330px] font-inter font-medium text-[16px] mb-[34px]'>Join our growing network of clients that are experiencing the Slate difference every day.</p>
            <Link to='Learn More' className='flex gap-3 items-center text-[#002E25]'>Learn More <FaArrowAltCircleRight  className='mt-1'/></Link>
        </div>
        <div className=' mt-[50px]'>
            <div className='flex gap-[81px] mb-[88px]'>
                <img src={CompanyLogo1} alt="CompanyLogo1"  className='w-[140px] h-[80px]'/>
                <img src={CompanyLogo2} alt="CompanyLogo2" className='w-[140px] h-[80px]'/>
                <img src={CompanyLogo3} alt="CompanyLogo3" className='w-[140px] h-[80px]'/>
                
            </div>
            <div className='flex gap-[81px]'>
                <img src={CompanyLogo4} alt="CompanyLogo4" className='w-[140px] h-[80px]'/>
                <img src={CompanyLogo5} alt="CompanyLogo5" className='w-[140px] h-[80px]'/>
                <img src={CompanyLogo1} alt="CompanyLogo1" className='w-[140px] h-[80px]'/>
            </div>
        </div>
    </div> 
    </Container>
 
    </div>
    </>
  )
}
