import CompanyBanner1 from '../../assets/images/Company_pic/CompanyBanner1.webp'
import Sign from '../../assets/images/Company_pic/Sign.webp'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Container from '../../components/layouts/Container';

export const Creative = () => {
  return (
    <>
            <Container className='pb-40'>
            <div className='flex flex-col gap-5 justify-self-end  pt-5'>
                <span className='max-w-[527px] font-inter text-[16px]  font-normal text-[#090C10]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                     sodales leo id commodo ornare. Vestibulum lobortis ligula vehicula:
                </span>
                <span className='max-w-[427px] font-inter text-[16px]  font-normal text-[#090C10]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
            </div>
        </Container>
    <Container className="main flex justify-center  mb-[160px]">
         <div>
            <h6 className="font-inter font-medium text-[14px]">Creative Freedom</h6>
             <h4 className="font-archivo font-medium text-[40px]"><span className='bg-green pl-2 pr-[6px] pb-[9px] rounded-lg'>Build a solution</span> that wins</h4>
             <h4 className="font-archivo font-medium text-[40px] mb-[26px]">you more customers.</h4>
             <p className='w-[457px] mb-[34px] font-inter font-normal text-[16px] text-[#3C4049]'>World class development and built for performance, Slate will deliver to the highest standard, every time.</p>

             <div className='flex mb-[28px] gap-2 text-[#002E25] font-inter text-[14px] font-medium'>
                <img src={Sign} alt="Sign" />
                <p>Beautiful sections</p>
             </div>
             <div className='flex mb-[28px] gap-2 text-[#002E25] font-inter text-[14px] font-medium'>
                <img src={Sign} alt="Sign" />
                <p>Suited to many businesses</p>
             </div>
             <div className='flex mb-[84px] gap-2 text-[#002E25] font-inter text-[14px] font-medium'>
                <img src={Sign} alt="Sign" />
                <p>Easily customized</p>
             </div>
             
             <button className='flex gap-2 items-center py-3 px-10 bg-black text-white rounded-full'>Get Started <FaRegArrowAltCircleRight /> </button>
         </div>

         <div>
            <img src={CompanyBanner1} alt="CompanyBanner1" />
         </div>
    </Container>
    
    
    </>
  )
}
