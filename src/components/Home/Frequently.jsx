import React from 'react'
import Container from '../layouts/Container'

const Frequently = () => {
  return (
    <>
    <Container>
        <div className="py-20 bg-[#F8FAF9] mb-30">
            <div className="max-w-[1320px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">  
                <div>
                    <p className="font-inter text-[14px] text-[#3C4049] mb-4">
                    Creative Freedom
                    </p>

                    <h2 className="font-archivo text-[40px] leading-[110%] text-[#002E25] font-semibold">
                    Frequently Asked
                    <br />
                    <span className="bg-[#CDFA89] px-2 rounded-md">
                        Questions
                    </span>
                    </h2>
                </div>
                <p className="font-inter text-[14px] text-[#3C4049] max-w-[340px] leading-7">
                Your success is our top priority. Our dedicated support team is here
                to assist you every step of the way.
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
                    <h3 className="font-inter text-[16px] text-[#002E25] mb-4">
                    Can I upgrade my subscription?
                    </h3>
                    <p className="font-inter text-[14px] text-[#3C4049] leading-7">
                    Absolutely! Upgrading your subscription plan with Slate is a breeze.
                    Simply log into your account and navigate to the billing section.
                    </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                    <h3 className="font-inter text-[16px] text-[#002E25] mb-4">
                    Can I cancel my subscription?
                    </h3>
                    <p className="font-inter text-[14px] text-[#3C4049] leading-7">
                    Of course! We believe in offering flexibility to our valued
                    customers. If you decide to cancel your subscription with Slate.
                    </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                    <h3 className="font-inter text-[16px] text-[#002E25] mb-4">
                    Does Slate offer a free trial period?
                    </h3>
                    <p className="font-inter text-[14px] text-[#3C4049] leading-7">
                    Yes, indeed! We understand that getting started with a new SaaS
                    platform can be overwhelming.
                    </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                    <h3 className="font-inter text-[16px] text-[#002E25] mb-4">
                    Does Slate offer a free trial period?
                    </h3>

                    <p className="font-inter text-[14px] text-[#3C4049] leading-7">
                    Of course! We believe in offering flexibility to our valued
                    customers. If you decide to cancel your subscription with Slate.
                    </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                    <h3 className="font-inter text-[16px] text-[#002E25] mb-4">
                    Can I upgrade my subscription?
                    </h3>
                    <p className="font-inter text-[14px] text-[#3C4049] leading-7">
                    Yes, indeed! We understand that getting started with a new SaaS
                    platform can be overwhelming.
                    </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                    <h3 className="font-inter text-[16px] text-[#002E25] mb-4">
                    Add your question title here?
                    </h3>
                    <p className="font-inter text-[14px] text-[#3C4049] leading-7">
                    Absolutely! Upgrading your subscription plan with Slate is a breeze.
                    Simply log into your account and navigate to the billing section.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Frequently