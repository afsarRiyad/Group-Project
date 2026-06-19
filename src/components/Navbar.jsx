import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaPinterestP } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi";
import Container from "./layouts/Container";
import logo from "../assets/images/logo.webp"

const Navbar = () => {
  return (
       <>
        <div className=" bg-[#002E25] text-white ">
         <Container>
              <div className="flex items-center justify-between py-2.5 px-6">
                <div className="flex items-center gap-2">
            <HiOutlineCube className="w-4 h-4" />
            <span>The banner is to inform visitors of an important message</span>
              </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Telegram" className="hover:opacity-80">
              <FaTelegramPlane className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:opacity-80">
              <FaPinterestP className="w-4 h-4" />
            </a>
          </div>
              </div>
         </Container>
        </div>

     <Container className="w-full font-inter">
      <div className="bg-[#002E25] text-white text-sm">
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-6 py-6">
          {/* Logo */}
         <div className="flex gap-18">
            <img src={logo} alt="logo" />

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 primaryTxt ">
            <a href="#" className="hover:text-black transition-colors">
              Company
            </a>
            <a href="#" className="hover:text-black  transition-colors">
              Product
            </a>
            <a href="#" className="hover:text-black  transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-black  transition-colors">
              Blog
            </a>
          </div>
         </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm font-medium text-primary border cursor-pointer border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              Sign in
            </button>
            <button className="px-5 py-2.5 cursor-pointer text-sm font-medium text-white bg-[#002E25] rounded-full hover:bg-[#003d30] transition-colors">
              Sign up for free
            </button>
          </div>
        </div>
      </nav>
    </Container>
       </>
  );
}


export default Navbar