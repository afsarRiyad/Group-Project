import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import { SiEvernote } from "react-icons/si";
import Creative from "../assets/images/rifat-img01.webp"

const OurProduct = () => {
    let slider1 = {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    autoplay : {
      delay: 1000,
      disableOnInteraction: false,
    },
    modules: [ Autoplay ],
  }
  return (
    <div className="bg-bg w-full pt-30">
        <div className="container pb-9">
            <p className="primaryTxt text-center font-medium">Our Product</p>
            <h2 className="headingTxt font-medium text-[72px] text-center">We’re on a <span className="bg-green py-1 px-2 rounded-md">mission to</span> <br/> power customers.</h2>
            <p className="text-[#3C4049] text-[18px] text-center">World class development and built for performance, Slate <br/> will deliver each and every time.</p>
        </div>
        <div className="w-full ml-10 mb-30 mt-15 m-auto">
            <Swiper {...slider1}>
                <SwiperSlide>
                    <div className="bg-white p-4 rounded-xl w-80">
                        <SiEvernote className="text-green text-[40px]" />
                        <h4 className="pt-5 pb-2">Evemote</h4>
                        <p className="primaryTxt">Linear helps streamline software projects, sprints, tasks, and bug tracking.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-4 rounded-xl w-80">
                        <SiEvernote className="text-green text-[40px]" />
                        <h4 className="pt-5 pb-2">Evemote</h4>
                        <p className="primaryTxt">Linear helps streamline software projects, sprints, tasks, and bug tracking.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-4 rounded-xl w-80">
                        <SiEvernote className="text-green text-[40px]" />
                        <h4 className="pt-5 pb-2">Evemote</h4>
                        <p className="primaryTxt">Linear helps streamline software projects, sprints, tasks, and bug tracking.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-4 rounded-xl w-80">
                        <SiEvernote className="text-green text-[40px]" />
                        <h4 className="pt-5 pb-2">Evemote</h4>
                        <p className="primaryTxt">Linear helps streamline software projects, sprints, tasks, and bug tracking.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="container pt-20">
            <div className="flex justify-between">
                <div className="">
                    <p className="primaryTxt font-medium">Creative Freedom</p>
                    <h3 className="headingTxt font-medium text-[40px] w-125 py-5"><span className="bg-green py-1 px-2 rounded-md">Easy to edit</span> and customize for your own projects.</h3>
                    <p  className="primaryTxt font-medium w-120">Whatever you need, Slate is built with solutions in mind. Need to customize further - no problem. </p>
                </div>
                <div className="">
                    <img src={Creative} alt='Creative' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProduct