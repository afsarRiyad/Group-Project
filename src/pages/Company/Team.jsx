import React from 'react'
import Container from '../../components/layouts/Container'
import Dylan from '../../assets/images/Company_pic/Dylan.webp'
import DylanText from '../../assets/images/Company_pic/DylanText.webp'
import Fig from '../../assets/images/Company_pic/Fig.webp'
import FigText from '../../assets/images/Company_pic/FigText.webp'
import Cecilia from '../../assets/images/Company_pic/Cecilia.webp'
import CeciliaText from '../../assets/images/Company_pic/CeciliaText.webp'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom'


export const Team = () => {
  return (
    <>
    <Container>
              <div className="main mb-[120px]">
                <div className="text-center ">
                  <h6 className="font-inter text-[16px] font-medium">Our Values</h6>
                  <h4 className="font-archivo text-[48px] font-medium text-center">
                    Business lead by
                  </h4>
                  <div className="ml-[450px] mb-[56px] text-center w-[350px] bg-green pl-[8px] pr-[6px] pb-2.5 rounded-lg font-archivo text-[48px] font-medium text-center">
                    <h3 className="">our principles</h3>
                  </div>
                </div>
        
                <div className='flex justify-center gap-7 '>
                  
                    <div className='items-center text-center'>
                       <img src={Dylan} alt="Dylan"  className=' mb-[32px] mt-[40px]'/>
                       <img src={DylanText} alt="DylanText" />
                       <div className='flex gap-[12px] justify-center mt-[24px]'> 
                       <Link to='https://www.facebook.com'><FaFacebook  className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/></Link> 
                       <FaTwitter className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/>  
                       <Link to='https://www.instagram.com'><RiInstagramFill className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/> </Link> 
                       </div>
                    </div>
                  
                
                    <div className='items-center text-center'>
                       <img src={Fig} alt="Fig"  className=' mb-[32px] mt-[40px]'/>
                      <img src={FigText} alt="FigText" />
                       <div className='flex gap-[12px] justify-center mt-[24px]'> 
                       <Link to='https://www.facebook.com'><FaFacebook  className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/></Link> 
                       <FaTwitter className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/> 
                       <Link to='https://www.instagram.com'><RiInstagramFill className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/> </Link> 
                       </div>
                    </div>


                    <div className='items-center text-center'>
                       <img src={Cecilia} alt="Cecilia"  className=' mb-[32px] mt-[40px]'/>
                       <img src={CeciliaText} alt="CeciliaText" />
                       <div className='flex gap-[12px] justify-center mt-[24px]'> 
                       <Link to='https://www.facebook.com'><FaFacebook  className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/></Link> 
                        <FaTwitter className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/> 
                       <Link to='https://www.instagram.com'><RiInstagramFill className='w-[40px] h-[40px] rounded-full py-3 px-3 inset-ring'/> </Link> 
                       </div>
                    </div>
                 

                </div>
              </div>
    </Container>
    </>
  )
}
