import Container from "./layouts/Container"
import { FcGoogle } from "react-icons/fc";

import bbbbb from '../assets/images/footerLogo.webp'
import Backgr from '../assets/images/YKX00qAsgJpmOM4mzoqt8kZLAgs.svg.png'

import mmm from '../assets/images/mmm.png'
import Back from '../assets/images/NEtHJDwruTYfTUuFfKiw5sp8xM.svg.png'


const Regestration = () => {
  return (
    <div>
        <Container>
            <div className="flex  gap-[300px] mt-[80px]">
            <div className="w-[376px] h-[74px]">
                <p className="font-inter font-medium text-[14px] text-[#9EA2AD]">Sign Up</p>
                <h2 className="font-archivo font-medium text-[32px] text-black pb-[30px]">Welcome to Slate!</h2>

                
                    <input className="py-[17px] pl-[15px] rounded-[50px] mb-[30px] w-full bg-[#F6F7F8]" type="text" placeholder="Email"/>

                    <input className="py-[17px] pl-[15px] rounded-[50px] w-full bg-[#F6F7F8]" type="text" placeholder="Password"/>

                    <button className="bg-[black] text-[white] mb-[50px] w-full py-[17px] mt-[30px] rounded-[50px] font-inter font-semibold text-[14px]">Login</button>


                 <div className="flex items-center justify-center gap-4 mb-[30px]">
                    <div className="w-40 h-[2px] bg-[#bdbaba]"></div>

                    <span className="text-lg font-semibold">
                        or
                    </span>

                    <div className="w-40 h-[2px] bg-[#bdbaba]"></div>
                    </div>


                    <div className="flex justify-center items-center bg-[#F6F7F8] mb-[50px] py-[12px] rounded-[50px]">
                    <h3 className="flex items-center gap-2.5 font-inter font-medium text-[14px]"><FcGoogle className="w-[24px] h-[24px] text-[#090C10]"/> Continue with Google</h3>
                </div>

                   
                    <p className="font-inter font-medium text-[14px]">Don’t have an account?  <span className="font-inter font-medium text-[14px text-[#9EA2AD]">login</span> </p>
               



            </div>
            <div>
                <div className="w-[466px]">
                    <img className="mb-[17px]" src={bbbbb} alt="" />
                    <h2 className="font-inter pb-[12px] font-medium text-[20px]">Slate Login:</h2>
                    <p className="font-inter font-medium text-[16px] pb-[80px] text-[#2B2F36]">Your success is our top priority. Our dedicated support team is 
                        here to assist you every step of the way. </p>

                       <div className="relative ">
                         <img className="absolute top-[20px] left-0" src={Backgr} alt="" />
                         <img src={mmm} alt="" />
                         <img className="absolute top-[170px] left-[-140px]" src={Back} alt="" />
                       </div>
                </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Regestration