import React from 'react'
import Container from './Container'
import { FaArrowRight } from "react-icons/fa6";
import icon from '../../assets/images/icon.webp';
import Discot from '../../assets/images/Discot.webp'
import Basketbal from '../../assets/images/basketbal.webp'
import playStor from '../../assets/images/playStor.webp'
const Productivity = () => {
  return (
    <>
     <Container>
       <div>
         <div className='bg-[#F6F7F8] rounded-[10px] flex justify-center gap-x-9'>
            <div className='pt-22 pb-22 max-w-[440px]'>
                <h3 className='headingTxt text-[40px] leading-15'> Make productivity easier with 50+ Integrations</h3>
                <p className='primaryTxt max-w-[425px] leading-6 mt-6.5 '>Integrate your favourite apps and platforms with Slate in seconds. Seamless integration and uninterrupted service. </p>
                <button className='flex primaryTxt gap-x-2 items-center text-white bg-primary py-2 px-5 rounded-[70px] mt-8'>Learn More  <FaArrowRight/> </button>
            </div>
            <div className='pt-22 max-w-[440px] flex items-center pb-26'>
                <img src={icon} alt="icon" />
            </div>
        </div>
        <div className='flex justify-between mt-8 mb-18.5'>
                <div className=''>
                    <img src={Discot} alt="discot" />
                </div>
                <div>
                    <img src={Basketbal} alt="Basketbal" />
                </div>
                <div>
                    <img src={playStor} alt="playStor" />
                </div>
            </div>
       </div>
    </Container>
    </>
  )
}

export default Productivity