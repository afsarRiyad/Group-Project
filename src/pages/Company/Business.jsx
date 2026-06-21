import React from 'react'
import Emoji1 from '../../assets/images/Company_pic/Emoji1.webp'
import Emoji2 from '../../assets/images/Company_pic/Emoji2.webp'
import Emoji3 from '../../assets/images/Company_pic/Emoji3.webp'
import Container from '../../components/layouts/Container'

export const Business = () => {
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
          <div className=' w-[332px] h-[284px]  shadow-md rounded-lg'>
            <div className='items-center text-center'>
               <img src={Emoji1} alt="Emoji1"  className='ml-[40%] mb-[32px] mt-[40px]'/>
               <h3 className='font-inter text-[20px] font-medium mb-[19px]'>Passion</h3>
               <p className=' w-[255px] ml-[40px] font-inter text-[14px] font-normal'>Your success is our passion. Built with you in mind, Slate will deliver to your </p>
              <span className='font-inter text-[14px] font-normal'>each and every need.</span>
            </div>
          </div>
          <div className=' w-[332px] h-[284px]  shadow-md rounded-lg'>
            <div className='items-center text-center'>
               <img src={Emoji2} alt="Emoji2"  className='ml-[40%] mb-[32px] mt-[40px]'/>
               <h3 className='font-inter text-[20px] font-medium mb-[19px]'>Passion</h3>
               <p className=' w-[255px] ml-[40px] font-inter text-[14px] font-normal'>Your success is our passion. Built with you in mind, Slate will deliver to your </p>
              <span className='font-inter text-[14px] font-normal'>each and every need.</span>
            </div>
          </div>
          <div className=' w-[332px] h-[284px]  shadow-md rounded-lg'>
            <div className='items-center text-center'>
               <img src={Emoji3} alt="Emoji3"  className='ml-[40%] mb-[32px] mt-[40px]'/>
               <h3 className='font-inter text-[20px] font-medium mb-[19px]'>Passion</h3>
               <p className=' w-[255px] ml-[40px] font-inter text-[14px] font-normal'>Your success is our passion. Built with you in mind, Slate will deliver to your </p>
              <span className='font-inter text-[14px] font-normal'>each and every need.</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
}
