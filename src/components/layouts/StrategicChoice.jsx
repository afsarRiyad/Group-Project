import React from 'react';
import Container from './Container';
import { IoIosPlay } from "react-icons/io";
import plus from '../../assets/images/plus.webp';

const StrategicChoice = () => {
  return (
    <div className='bg-[#F3F7F6]'>
      <Container>
        <div className='flex flex-col lg:flex-row pb-16 lg:pb-30 justify-between pt-16 lg:pt-30 gap-10 lg:gap-0'>

          {/* Left Side */}
          <div className='max-w-[408px]'>
            <h2 className='headingTxt text-[32px] lg:text-[42px] mb-3.25'>
              We are a
            </h2>

            <h3 className='mb-6.5'>
              <span className='headingTxt text-[32px] lg:text-[42px] bg-[#CDFA89] px-2 py-1.25'>
                Strategic choice
              </span>
            </h3>

            <p className='primaryTxt leading-6.5 max-w-[390px] mb-10 lg:mb-43.5'>
              World class development and built for performance, Slate will deliver to the highest standard, every time.
            </p>

            <button className='flex items-center gap-2 learnTxt text-[#ffffff] bg-[#090C10] px-4 py-2 rounded-[70px]'>
              <IoIosPlay /> Watch Video Guide
            </button>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div>
              <img src={plus} alt="plus" />
              <h3 className='headingTxt text-[20px] lg:text-[24px] font-medium mt-6 mb-4'>
                Deploy faster together
              </h3>
              <p className='primaryTxt leading-6 max-w-[260px]'>
                Trust our team of experts to deliver what you need now.
              </p>
            </div>

            <div>
              <img src={plus} alt="plus" />
              <h3 className='headingTxt text-[20px] lg:text-[24px] font-medium mt-6 mb-4'>
                Beautiful No-Code
              </h3>
              <p className='primaryTxt leading-6 max-w-[250px]'>
                Seamless and easy to use, our no-code solution is beautiful.
              </p>
            </div>

            <div>
              <img src={plus} alt="plus" />
              <h3 className='headingTxt text-[20px] lg:text-[24px] font-medium mt-6 mb-4'>
                Good Communication
              </h3>
              <p className='primaryTxt leading-6 max-w-[240px]'>
                No matter the time of day, our team is here to support you.
              </p>
            </div>

            <div>
              <img src={plus} alt="plus" />
              <h3 className='headingTxt text-[20px] lg:text-[24px] font-medium mt-6 mb-4'>
                Easily Customised
              </h3>
              <p className='primaryTxt leading-6 max-w-[260px]'>
                Trust our team of experts to deliver what you need now.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default StrategicChoice;