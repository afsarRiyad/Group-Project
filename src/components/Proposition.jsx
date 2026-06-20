import { RiGlobeLine } from "react-icons/ri";
import { MdLightbulbOutline } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import performance from "../assets/images/rifat-img02.webp";
import { Link } from "react-router-dom";
import productivity from "../assets/images/rifat-img03.webp";
import { FaRegArrowAltCircleRight ,FaDribbble ,FaArrowRight} from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Container from "./layouts/Container";


const Proposition = () => {
  return (
    <Container className="container bg-white">
        {/* Passion */}
        <div className="grid grid-cols-4 my-25">
            <div className="">
                <div className="flex">
                    <span className="bg-[#F6F7F8] rounded-full w-14 h-14 flex items-center justify-center">
                        <RiGlobeLine className="text-3xl"/>
                    </span>
                </div>
                <div className="">
                    <h4 className="text-[20px] text-[#3C4049] font-inter my-5">Passion</h4>
                    <p className="primaryTxt">Your success is our passion. We are here to help and support every step of the way.</p>
                </div>
            </div>
            <div className="">
                <div className="flex">
                    <span className="bg-[#F6F7F8] rounded-full w-14 h-14 flex items-center justify-center">
                        <MdLightbulbOutline className="text-3xl"/>
                    </span>
                </div>
                <div className="">
                    <h4 className="text-[20px] text-[#3C4049] font-inter my-5">Transparency</h4>
                    <p className="primaryTxt mr-5">The transparency of our data will help you make the informed decisions you need to.</p>
                </div>
            </div>
            <div className="">
                <div className="flex">
                    <span className="bg-[#F6F7F8] rounded-full w-14 h-14 flex items-center justify-center">
                        <LuMessageSquareMore className="text-3xl"/>
                    </span>
                </div>
                <div className="">
                    <h4 className="text-[20px] text-[#3C4049] font-inter my-5">Customer Focus</h4>
                    <p className="primaryTxt">No matter the problem, big or small - our team of experts are here to help and guide you.</p>
                </div>
            </div>
            <div className="">
                <div className="flex">
                    <span className="bg-[#F6F7F8] rounded-full w-14 h-14 flex items-center justify-center">
                        <CiClock2 className="text-3xl"/>
                    </span>
                </div>
                <div className="">
                    <h4 className="text-[20px] text-[#3C4049] font-inter my-5">Slate Principles</h4>
                    <p className="primaryTxt">World class development and built for performance, Slate will deliver each and every time.</p>
                </div>
            </div>
        </div>
        {/* Slate journey */}
        <div className="flex justify-between py-30">
            <div className="">
                <p className="primaryTxt font-medium">Creative Freedom</p>
                <h3 className="headingTxt font-medium text-[40px] py-5">Start your<span className="bg-green mx-2 py-1 px-2 rounded-md">Slate</span> <br />journey here.</h3>
                <p  className="primaryTxt font-medium pb-10">World class development and built for performance, Slate will <br/> deliver each and every time. </p>
                <div className="">
                    <input type="text" placeholder="Your Name" className="w-76 rounded-full p-4 outline-none bg-[#F6F7F8] placeholder:text-[#585D69]"/>
                    <input type="email" placeholder="Company Email" className="w-76 rounded-full p-4 outline-none bg-[#F6F7F8] placeholder:text-[#585D69] my-4"/>
                    <div className="mt-4">
                        <Link to="" className="mx-auto py-4.5 px-29 rounded-full text-white bg-black">Get Started</Link>
                    </div>
                    <p className="text-[#9EA2AD] text-[14px] font-inter font-medium mt-10">14 day trial – No credit card required</p>
                </div>
            </div>
            <div className="">
                <img src={performance} alt="performance" />
            </div>
        </div>
        {/* productivity */}
        <div className="bg-bg w-full rounded-2xl">
            <div className="py-22 px-33.5 flex justify-between gap-9">
                <div className="pr-40">
                    <h3 className="text-primary text-[40px] font-medium font-archivo">Make productivity easier with 50+ Integrations</h3>
                    <p className="text-[#3C4049] text-[16px] font-inter pt-6.5">Seamless integrations with uninterrupted service. You can trust Slate to deliver every time. </p>
                    <div className="flex mt-8">
                    <Link className="flex gap-2 px-5 py-2.5 items-center rounded-full bg-black text-white">Learn More <FaRegArrowAltCircleRight /></Link>
                    </div>
                </div>
                <div className="">
                    <img src={productivity} alt="productivity" />
                </div>
            </div>
        </div>
        {/* social media */}
        <div className="grid grid-cols-3 mb-25 mt-8 gap-8">
            <div className="p-8 border border-[#EBECEF] rounded-bl-2xl rounded-md">
                <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-4 mb-5">
                        <FaDiscord />
                        <h5>Discord</h5>
                    </div>
                    <div className="p-1 bg-bg rounded-full">
                        <FaArrowRight />
                    </div>
                </div>
                <p className="primaryTxt">Integrate your favourite platforms with Slate in seconds. Seamless uninterrupted service.</p>
            </div>
            <div className="p-8 border border-[#EBECEF] rounded-bl-2xl rounded-md">
                <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-4 mb-5">
                        <FaDribbble />
                        <h5>Dribbble</h5>
                    </div>
                    <div className="p-1 bg-bg rounded-full">
                        <FaArrowRight />
                    </div>
                </div>
                <p className="primaryTxt">Integrate your favourite platforms with Slate in seconds. Seamless uninterrupted service.</p>
            </div>
            <div className="p-8 border border-[#EBECEF] rounded-bl-2xl rounded-md">
                <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-4 mb-5">
                        <IoLogoGooglePlaystore />
                        <h5>Play Store</h5>
                    </div>
                    <div className="p-1 bg-bg rounded-full">
                        <FaArrowRight />
                    </div>
                </div>
                <p className="primaryTxt">Integrate your favourite platforms with Slate in seconds. Seamless uninterrupted service.</p>
            </div>
        </div>
    </Container>
  )
}

export default Proposition