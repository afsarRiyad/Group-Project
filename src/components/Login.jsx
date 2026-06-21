import React from 'react'
import Container from './layouts/Container'
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import bbbbb from '../assets/images/footerLogo.webp'
import Backgr from '../assets/images/YKX00qAsgJpmOM4mzoqt8kZLAgs.svg.png'
import Backg from '../assets/images/WzWGW3CgEZyoaUVrXzt0bW9FU.png.png'
import Back from '../assets/images/NEtHJDwruTYfTUuFfKiw5sp8xM.svg.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
         <Container>
            <div className="flex  gap-[300px] mt-[80px]">
            <div className="w-[376px] h-[74px]">
                <p className="font-inter font-medium text-[14px] text-[#9EA2AD]">Login</p>
                <h2 className="font-archivo font-medium text-[32px] text-black pb-[30px]">Welcome to Slate!</h2>

                <div className="flex justify-center items-center bg-[#F6F7F8] mb-[16px] py-[12px] rounded-[50px] cursor-pointer hover:bg-gray-300/50 duration-150">
                    <h3 className="flex items-center gap-2.5 font-inter font-medium text-[14px]"><FcGoogle className="w-[24px] h-[24px] text-[#090C10] "/> Continue with Google</h3>
                </div>

                <div className="flex justify-center items-center bg-[#F6F7F8] py-[12px] mb-[31px] rounded-[50px] cursor-pointer hover:bg-gray-300/50 duration-150 ">
                    <h3 className="flex items-center gap-2.5 font-inter font-medium text-[14px]"><FaTwitter className="w-[24px] h-[24px] text-[#1DA1F2]" /> Continue with Google</h3>
                     </div>

                    <div className="flex items-center justify-center gap-4 mb-[30px]">
                    <div className="w-40 h-[2px] bg-[#bdbaba]"></div>

                    <span className="text-lg font-semibold">
                        or
                    </span>

                    <div className="w-40 h-[2px] bg-[#bdbaba]"></div>
                    </div>

                    <input className="py-[17px] pl-[15px] rounded-[50px] mb-[30px] w-full bg-[#F6F7F8]" type="text" placeholder="Email"/>

                    <input className="py-[17px] pl-[15px] rounded-[50px] w-full bg-[#F6F7F8]" type="text" placeholder="Password"/>

                    <button className="bg-[black] text-[white] mb-[50px] w-full py-[17px] mt-[30px] rounded-[50px] font-inter font-semibold text-[14px]  hover:bg-black/80 duration-150 cursor-pointer">Login</button>

                    <Link to='/registration' className="font-inter font-medium text-[14px]">Don’t have an account?  <span className="font-inter font-medium text-[14px text-[#9EA2AD]">Register</span> </Link>

            </div>
            <div>
                <div className="w-[466px]">
                    <img className="mb-[17px]" src={bbbbb} alt="" />
                    <h2 className="font-inter pb-[12px] font-medium text-[20px]">Slate Login:</h2>
                    <p className="font-inter font-medium text-[16px] pb-[80px] text-[#2B2F36]">Your success is our top priority. Our dedicated support team is 
                        here to assist you every step of the way. </p>

                       <div className="relative ">
                         <img className="absolute top-[20px] left-0" src={Backgr} alt="" />
                         <img src={Backg} alt="" />
                         <img className="absolute top-[170px] left-[-140px]" src={Back} alt="" />
                       </div>
                </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Login