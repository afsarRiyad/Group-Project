import React from 'react';
import containerOne from '../../assets/images/ContainerOne.webp';
import Meringu from '../../assets/images/Meringu.webp';
import ContainerTwo from '../../assets/images/ContainerTwo.webp';
import Containerr from '../../assets/images/Containerr.webp';
import Container from '../layouts/Container';

const OurBlogs = () => {
  return (
    <Container>
      <div className=" pb-16 lg:pb-30">
        <div className="text-center mb-12 lg:mb-24">
          <p className="primaryTxt">Our Blogs</p>

          <h2 className="headingTxt text-[30px] sm:text-[36px] lg:text-[48px]">
            Love to keep learning?
          </h2>

          <h3 className="headingTxt text-[30px] sm:text-[36px] lg:text-[48px]">
            See what
            <span className="bg-[#CDFA89] mx-2 lg:mx-3.5 px-2 py-1 lg:py-2">
              our experts
            </span>
            are saying.
          </h3>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-8">
          <div className="w-full xl:max-w-[580px]">
            <img
              className="w-full mb-6 lg:mb-8 rounded-lg"
              src={containerOne}
              alt="containerOne"/>
            <h4 className="text-primary font-semibold text-[18px] lg:text-[20px] font-inter mb-3">
              Why Framer is the best website development platform!
            </h4>
            <p className="primaryTxt max-w-[494px]">
              World class development and built for performance, Slate will
              deliver to the highest standard.
            </p>
            <div className="flex items-center mt-6">
              <img src={Meringu} alt="Meringu" />
              <div className="ml-4">
                <h4 className="font-inter text-primary text-[16px] font-medium">
                  Dylan Meringu
                </h4>
                <p className="primaryTxt">
                  May 4, 2023
                  <span className="ml-4">8 min read</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-5 w-full xl:max-w-[580px]">
              <img
                className="w-full sm:w-[240px] object-cover rounded-lg"
                src={ContainerTwo}
                alt="ContainerTwo"/>
              <div>
                <h2 className="font-inter text-[18px] font-medium text-primary leading-8 mb-3">
                  Ultimate guide to SEO for beginners
                </h2>
                <p className="primaryTxt max-w-[251px] leading-6">
                  World class development and built for performance, Slate will
                  deliver to the highest standard.                </p>
                <div className="flex items-center mt-6">
                  <img src={Meringu} alt="Meringu" />
                 <div className="ml-4">
                    <h4 className="font-inter text-primary text-[16px] font-medium">
                      Dylan Meringu</h4>
                    <p className="primaryTxt">
                      May 4, 2023
                      <span className="ml-4">8 min read</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 w-full xl:max-w-[580px]">
              <img
                className="w-full sm:w-[240px] object-cover rounded-lg"
                src={Containerr}
                alt="Containerr" />
              <div>
                <h2 className="font-inter text-[18px] font-medium text-primary leading-8 mb-3"> The best no-code platforms for 2023</h2>
                <p className="primaryTxt max-w-[251px] leading-6">
                  World class development and built for performance, Slate will
                  deliver to the highest standard. </p>
                <div className="flex items-center mt-6">
                  <img src={Meringu} alt="Meringu" />
                  <div className="ml-4">
                    <h4 className="font-inter text-primary text-[16px] font-medium">
                      Dylan Meringu</h4>
                    <p className="primaryTxt">
                      May 4, 2023
                      <span className="ml-4">8 min read</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurBlogs;