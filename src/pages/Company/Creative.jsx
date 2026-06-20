import CompanyBanner1 from '../../assets/images/Company_pic/CompanyBanner1.webp'
import Sign from '../../assets/images/Company_pic/Sign.webp'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const Creative = () => {
  return (
    <>
    <div className="main flex justify-center mt-[157px] mb-[120px]">
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
    </div>
    
    
    </>
  )
}
