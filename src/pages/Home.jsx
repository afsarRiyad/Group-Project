import React from "react";
import Container from "../components/layouts/Container";
import SlateDesign from "../assets/images/SlateDesign.png";
import SlateDesign1 from "../assets/images/SlateDesign1.png";
import SlateDesign2 from "../assets/images/SlateDesign2.png";
import SlateDesign3 from "../assets/images/SlateDesign3.png";
import boxicon from "../assets/images/boxicon.png"
import staricon from "../assets/images/staricon.png"
import roundicon from "../assets/images/roundicon.png"
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";
import Powerful from "../components/Powerful";
import Slatetemp from "../components/Slatetemp";

const Home = () => {
  return (
    <>
      <div className="bg-[#DAE7E3]">
        <div className="-w-full">
          <div className="flex bg-[#DAE7E3]">
            <div className="pt-[112px]">
              <img src={SlateDesign} alt="SlateDesign" />
              <img src={SlateDesign1} alt="SlateDesign1"/>
            </div>
            <div className="text-center pt-[112px] max-w-[1440px] mx-auto">
              <div className="">
                <p className="text-[16px] font-inter text-[#3C4049] pb-[22px]">
                  55,000+ Business Trust
                </p>
                <div className="leading-22">
                  <h2 className="text-[72px] text-[#002E25] font-archivo">
                    Deliver{" "}
                    <span className="bg-green px-3 rounded-lg">excellence</span>
                  </h2>
                  <h2 className="text-[72px] text-[#002E25]">
                    for your customers with slate
                  </h2>
                </div>
                <p className="text-[18px] font-inter text-[#002E25] px-[480px] pt-[33px] pb-[46px]">
                  World class development and built for performance, Slate will
                  deliver to the highest standard, each and every time.
                </p>
              </div>
              <div className="flex justify-center pb-3">
                <div className="flex items-center w-full max-w-md border border-gray-300 bg-white rounded-full ">
                  <input
                    type="email"
                    placeholder="Enter your mail address"
                    className="flex-1 px-5 py-4 outline-none text-gray-700"
                  />
                  <button className="bg-green hover:bg-[#b9f363] text-[14px] text-[#50741B] font-semibold px-6 py-4 rounded-full m-0.5 transition">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="pb-[117px]">
                <p className="text-[14px] text-[#585D69]">This template is free to get started</p>
              </div>
            </div>
            <div className="pt-[88px] relative">
              <div>
                <img
                src={SlateDesign2}
                alt="SlateDesign2"
                className="w-[264px] h-[240px] rounded-l-lg pb-7.5"
              />
              </div>
              
              <div className="absolute right-0">
                <img
                src={SlateDesign3}
                alt="SlateDesign3"
                className="w-[250px] h-[210px] pl-[20px]"
              />
              </div>
              
            </div>
          </div>
        </div>
        
        <Container>
          <div className="flex gap-11.5 pb-17 max-w-[80%] mx-auto">
            <div className="flex items-center">
              <img src={boxicon} alt="boxicon" className="pr-10"/>
              <p className="font-inter text-[14px] text-[#3C4049]">Adjust the features to explain your product to customers</p>
            </div>
            <div className="flex items-center">
              <img src={staricon} alt="staricon" className="pr-10 "/>
              <p className="font-inter text-[14px] text-[#3C4049]">Adjust the features to explain your product to customers</p>
            </div> 
            <div className="flex items-center">
              <img src={roundicon} alt="roundicon" className="pr-10 "/>
              <p className="font-inter text-[14px] text-[#3C4049]">Adjust the features to explain your product to customers</p>
            </div>
          </div>

          <div className="flex gap-[166px] pb-[91px]">
            <div className="pt-30">
              <h2 className="text-[48px] text-[#002E25] font-archivo font-medium mx-[35px]">Easy to edit and customize for your own projects.</h2>
            </div>
            <div className="pt-[176px]">
              <p className="text-[#3C4049] text-[16px] font-inter pb-4.5">Discover a powerful solution that saves your hours of development and design time.</p>
              <Link to="" className="flex items-center gap-2 text-[#002E25] text-[14px] font-inter font-medium">Learn More <FaCircleArrowRight/> </Link>
            </div>
          </div>
        </Container>
      </div>
      <Powerful/>
      <Slatetemp/>
    </>
  );
};

export default Home;