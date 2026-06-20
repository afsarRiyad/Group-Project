
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { IoInformationCircleOutline } from "react-icons/io5";

const Priceplan = () => {
  return (
    <div className="max-w-298 mx-auto py-30">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h3 className="headingTxt text-[48px] font-medium">
            See which is the best
            <span className="bg-green py-1 px-2 rounded-md mx-2">
              Price plan
            </span>
            for you
          </h3>
        </div>

        <div>
          <p className="text-[#3C4049] text-[16px] font-inter">
            Your success is our top priority. Our dedicated support team is here
            to assist you every step of the way. From onboarding to
            troubleshooting, we provide prompt and reliable support, ensuring a
            smooth and exceptional experience with Slate.
          </p>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="mt-20 overflow-hidden rounded-2xl border border-[#B3B3BC]">

        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-[#F6F7F8]">
          <div className="px-8 py-5 text-sm font-semibold text-[#090C10]">
            Products
          </div>
          <div className="px-8 py-5 text-center text-sm font-semibold text-[#090C10]">
            Basic
          </div>
          <div className="px-8 py-5 text-center text-sm font-semibold text-[#090C10]">
            Standard
          </div>
          <div className="px-8 py-5 text-center text-sm font-semibold text-[#090C10]">
            Plus
          </div>
        </div>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-[#B3B3BC]">
          <div className="flex items-center gap-2 px-8 py-7 text-[#090C10]">
            Beautiful Landing Pages
            <IoInformationCircleOutline className="text-[#6B7280]" />
          </div>
          <div className="px-8 py-7 text-center text-[#090C10]">25,000</div>
          <div className="px-8 py-7 text-center text-[#090C10]">50,000</div>
          <div className="px-8 py-7 text-center text-[#090C10]">125,000</div>
        </div>

        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-[#B3B3BC]">
          <div className="flex items-center gap-2 px-8 py-7 text-[#090C10]">
            Pricing Tables
            <IoInformationCircleOutline className="text-[#6B7280]" />
          </div>
          <div className="px-8 py-7 text-center text-[#090C10]">
            Unlimited
          </div>
          <div className="px-8 py-7 text-center text-[#090C10]">
            Unlimited
          </div>
          <div className="px-8 py-7 text-center text-[#090C10]">
            Unlimited
          </div>
        </div>

        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-[#B3B3BC]">
          <div className="flex items-center gap-2 px-8 py-7 text-[#090C10]">
            Interactions
            <IoInformationCircleOutline className="text-[#6B7280]" />
          </div>
          <div className="px-8 py-7 text-center text-[#090C10]">
            Unlimited
          </div>
          <div className="px-8 py-7 text-center text-[#090C10]">
            Unlimited
          </div>
          <div className="px-8 py-7 text-center text-[#090C10]">
            Unlimited
          </div>
        </div>

        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-[#B3B3BC]">
          <div className="flex items-center gap-2 px-8 py-7 text-[#090C10]">
            Content Management
            <IoInformationCircleOutline className="text-[#6B7280]" />
          </div>

          <div className="flex justify-center items-center py-7">
            <RxCrossCircled className="text-[#B3B3BC] text-[22px]" />
          </div>

          <div className="flex justify-center items-center py-7">
            <FaCheckCircle className="text-[#090C10] text-[20px]" />
          </div>

          <div className="flex justify-center items-center py-7">
            <FaCheckCircle className="text-[#090C10] text-[20px]" />
          </div>
        </div>

        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-[#B3B3BC]">
          <div className="flex items-center gap-2 px-8 py-7 text-[#090C10]">
            Analytics
            <IoInformationCircleOutline className="text-[#6B7280]" />
          </div>

          <div className="flex justify-center items-center py-7">
            <FaCheckCircle className="text-[#090C10] text-[20px]" />
          </div>

          <div className="flex justify-center items-center py-7">
            <FaCheckCircle className="text-[#090C10] text-[20px]" />
          </div>

          <div className="flex justify-center items-center py-7">
            <FaCheckCircle className="text-[#090C10] text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priceplan;