import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import Partner1 from "../assets/images/rifat-img04.webp"
import Partner2 from "../assets/images/rifat-img05.webp"
import Partner3 from "../assets/images/rifat-img06.webp"
import Partner4 from "../assets/images/rifat-img07.webp"
import Partner5 from "../assets/images/rifat-img08.webp"
import customer1 from "../assets/images/rifat-img09.webp"
import customer2 from "../assets/images/rifat-img10.webp"
import customer3 from "../assets/images/rifat-img11.webp"
import customer4 from "../assets/images/rifat-img12.webp"


const Partners = () => {
  return (
    <div>
        {/* Partners */}
        <div className="bg-bg w-full">
            <div className="container py-30 grid grid-cols-2">
                <div className="">
                    <p className="primaryTxt font-medium">Creative Freedom</p>
                    <h3 className="headingTxt font-medium text-[48px] pt-5 pb-9"><span className="bg-green py-1 px-2 rounded-md">Slate Template</span> <br/>Partners + Clients</h3>
                    <p className="text-[#3C4049] text-[16px] font-inter font-medium pb-10">Join our growing network of clients that are <br/> experiencing the Slate difference every day.</p>
                    <div className="">
                        <Link to="#" className="text-[#002E25] font-archivo flex text-2xl gap-3 items-center">Learn More <FaArrowRight className=" bg-[#002E25] text-white rounded-full p-1"/></Link>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-10">
                    <img src={Partner1} alt="Partner" />
                    <img src={Partner2} alt="Partner" />
                    <img src={Partner3} alt="Partner" />
                    <img src={Partner4} alt="Partner" />
                    <img src={Partner5} alt="Partner" />
                    <img src={Partner1} alt="Partner" />
                </div>
            </div>
        </div>
        {/* industry leaders */}
        <div className="container py-30">
            <div className="text-center">
                <p className="text-[#3C4049] text-[16px] font-inter">Our Blogs</p>
                <h3 className="headingTxt text-[48px] font-medium">Loved by industry leaders <br/> See what <span className="bg-green py-1 px-2 rounded-md">customers</span> are saying.</h3>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-24">
                <div className="rounded-2xl border border-[#EBECEF]">
                    <img src={customer1} className="rounded-2xl p-1.5" alt="customer" />
                    <div className="p-8">
                        <h4 className="text-primary font-inter text-[20px]">Why Framer is the best website development platform!</h4>
                        <p className="primaryTxt pt-4 pb-7">World class development and built for performance, Slate will deliver to the highest standard.</p>
                        <div className="flex gap-4">
                            <img src={customer4} alt="customer" />
                            <div className="">
                                <h5 className="text-[#3C4049] text-[16px] font-inter">Dylan Meringu</h5>
                                <p className="primaryTxt">May 4, 2023<span className="px-2">.</span>8 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="rounded-2xl border border-[#EBECEF] flex">
                        <img src={customer2} className="rounded-2xl p-1.5" alt="customer" />
                        <div className="m-7">
                            <h4 className="text-primary font-inter text-[18px]">Ultimate guide to SEO for beginners</h4>
                            <p className="primaryTxt pt-4 pb-7">World class development and built for performance, Slate will deliver to the highest standard.</p>
                            <div className="flex gap-4">
                                <img src={customer4} alt="customer" />
                                <div className="">
                                    <h5 className="text-[#3C4049] text-[16px] font-inter">Dylan Meringu</h5>
                                    <p className="primaryTxt">May 4, 2023<span className="px-2">.</span>8 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-[#EBECEF] flex mt-8">
                        <img src={customer3} className="rounded-2xl p-1.5" alt="customer" />
                        <div className="m-7">
                            <h4 className="text-primary font-inter text-[18px]">The best no-code platforms for 2023</h4>
                            <p className="primaryTxt pt-4 pb-7">World class development and built for performance, Slate will deliver to the highest standard.</p>
                            <div className="flex gap-4">
                                <img src={customer4} alt="customer" />
                                <div className="">
                                    <h5 className="text-[#3C4049] text-[16px] font-inter">Dylan Meringu</h5>
                                    <p className="primaryTxt">May 4, 2023<span className="px-2">.</span>8 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners