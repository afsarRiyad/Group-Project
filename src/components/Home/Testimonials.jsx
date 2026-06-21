import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import logo from '../../assets/images/review-logo.png'
import dylan from '../../assets/images/review-dylan.png'
import { FaStar } from "react-icons/fa6";



const Testimonials = () => {

 const slider = {
    spaceBetween: 32,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <div>
        <div className="max-w-298 mx-auto py-30">
            <div className="mb-16">
                <p className="primaryTxt mb-5">Testimonials</p>
                <h3 className="headingTxt text-[40px] font-medium w-[390px]"><span className="bg-green py-1 px-2 rounded-md mr-2">Save hours</span>and build better websites.</h3>
            </div>
            <div className="">
                <Swiper {...slider}>
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-xl">
                            <img src={logo} alt='logo' />
                            <div className="bg-[#EBECEF] my-8 w-full h-0.5"></div>
                            <div className="flex gap-4">
                                <div className="">
                                    <img src={dylan} alt='' />
                                </div>
                                <div className="">
                                    <h5 className='text-primary text-[16px] font-inter'>Dylan Meringu</h5>
                                    <p className='primaryTxt'>July 27, 2023</p>
                                </div>
                            </div>
                            <p className="primaryTxt mt-9">"Slate's seamless integration with our existing tools saved us countless hours of manual work. We effortlessly connected our CRM"</p>
                            <div className="bg-[#EBECEF] my-8 w-full h-0.5"></div>
                            <div className="flex text-[#090C10] gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-xl">
                            <img src={logo} alt='logo' />
                            <div className="bg-[#EBECEF] my-8 w-full h-0.5"></div>
                            <div className="flex gap-4">
                                <div className="">
                                    <img src={dylan} alt='' />
                                </div>
                                <div className="">
                                    <h5 className='text-primary text-[16px] font-inter'>Dylan Meringu</h5>
                                    <p className='primaryTxt'>July 27, 2023</p>
                                </div>
                            </div>
                            <p className="primaryTxt mt-9">"Slate's seamless integration with our existing tools saved us countless hours of manual work. We effortlessly connected our CRM"</p>
                            <div className="bg-[#EBECEF] my-8 w-full h-0.5"></div>
                            <div className="flex text-[#090C10] gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-xl">
                            <img src={logo} alt='logo' />
                            <div className="bg-[#EBECEF] my-8 w-full h-0.5"></div>
                            <div className="flex gap-4">
                                <div className="">
                                    <img src={dylan} alt='' />
                                </div>
                                <div className="">
                                    <h5 className='text-primary text-[16px] font-inter'>Dylan Meringu</h5>
                                    <p className='primaryTxt'>July 27, 2023</p>
                                </div>
                            </div>
                            <p className="primaryTxt mt-9">"Slate's seamless integration with our existing tools saved us countless hours of manual work. We effortlessly connected our CRM"</p>
                            <div className="bg-[#EBECEF] my-8 w-full h-0.5"></div>
                            <div className="flex text-[#090C10] gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-xl">
                            <img src={logo} alt='logo' />
                            <div className="bg-[#EBECEF] my-8 w-full h-0.5"></div>
                            <div className="flex gap-4">
                                <div className="">
                                    <img src={dylan} alt='' />
                                </div>
                                <div className="">
                                    <h5 className='text-primary text-[16px] font-inter'>Dylan Meringu</h5>
                                    <p className='primaryTxt'>July 27, 2023</p>
                                </div>
                            </div>
                            <p className="primaryTxt mt-9">"Slate's seamless integration with our existing tools saved us countless hours of manual work. We effortlessly connected our CRM"</p>
                            <div className="bg-[#EBECEF] my-8 w-full h-0.5"></div>
                            <div className="flex text-[#090C10] gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className="w-full bg-[#F3F7F6]">
            <div className="max-w-298 mx-auto py-30">
                <div className="flex justify-between items-end mb-12">
                    <div className="">
                        <p className="primaryTxt mb-5">Creative Freedom</p>
                <h3 className="headingTxt text-[48px] w-[390px] font-medium">Frequently Asked <span className="bg-green py-1 px-2 rounded-md mr-2">Questions</span></h3>
                    </div>
                    <div className="w-[355px] bottom-0">
                        <p className='text-[#3C4049] text-[16px] font-inter '>Your success is our top priority. Our dedicated support team is here to assist you every step of the way</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="p-8 rounded-lg bg-white">
                        <h5 className='text-[#3C4049] text-[16px] font-inter'>Can I upgrade my subscription?</h5>
                        <p className='text-[#3C4049] text-[14px] mt-3.25 font-inter'>Absolutely! Upgrading your subscription plan with Slate is a breeze. Simply log into your account, navigate to the billing section</p>
                    </div>
                    <div className="p-8 rounded-lg bg-white">
                        <h5 className='text-[#3C4049] text-[16px] font-inter'>Can I cancel my subscription?</h5>
                        <p className='text-[#3C4049] text-[14px] font-inter mt-3.25'>Of course! We believe in offering flexibility to our valued customers. If you decide to cancel your subscription with Slate,</p>
                    </div>
                    <div className="p-8 rounded-lg bg-white">
                        <h5 className='text-[#3C4049] text-[16px] font-inter'>Does Slate offer a free trial period?</h5>
                        <p className='text-[#3C4049] text-[14px] font-inter mt-3.25 pr-0.5'>Yes, indeed! We understand that getting started with a new SaaS platform can be overwhelming.</p>
                    </div>
                    <div className="p-8 rounded-lg bg-white">
                        <h5 className='text-[#3C4049] text-[16px] font-inter'>Does Slate offer a free trial period?</h5>
                        <p className='text-[#3C4049] text-[14px] font-inter mt-3.25'>Of course! We believe in offering flexibility to our valued customers. If you decide to cancel your subscription with Slate,</p>
                    </div>
                    <div className="p-8 rounded-lg bg-white">
                        <h5 className='text-[#3C4049] text-[16px] font-inter'>Can I upgrade my subscription?</h5>
                        <p className='text-[#3C4049] text-[14px] font-inter mt-3.25 pr-0.5'>Yes, indeed! We understand that getting started with a new SaaS platform can be overwhelming.</p>
                    </div>
                    <div className="p-8 rounded-lg bg-white">
                        <h5 className='text-[#3C4049] text-[16px] font-inter'>Add your question title here?</h5>
                        <p className='text-[#3C4049] text-[14px] font-inter mt-3.25 pr-0.5'>Absolutely! Upgrading your subscription plan with Slate is a breeze. Simply log into your account, navigate to the billing section</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials