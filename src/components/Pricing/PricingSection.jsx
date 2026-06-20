import React, { useState } from 'react';
import { FiWifi, FiLock, FiCheck, FiArrowRight } from 'react-icons/fi';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'The Slate necessities. Every thing you need to get up and running.',
      monthlyPrice: 16,
      yearlyPrice: 134.4,
      savings: 'Save up to 30%',
      badge: null,
      buttonStyle: 'black',
      features: [
        { icon: FiWifi, label: '5GB Bandwidth' },
        { icon: FiLock, label: '48 Limit Support' }
      ],
      included: [
        'Add feature here',
        'Add feature here'
      ]
    },
    {
      name: 'Standard',
      description: 'Take it one step further and get on with achieving your goals quicker.',
      monthlyPrice: 24,
      yearlyPrice: 201.6,
      savings: 'Save up to 30%',
      badge: 'Popular',
      buttonStyle: 'black',
      features: [
        { icon: FiWifi, label: '10GB Bandwidth' },
        { icon: FiLock, label: '56 Limit Support' }
      ],
      included: [
        'Add feature here',
        'Add feature here'
      ]
    },
    {
      name: 'Plus',
      description: 'All the bells and whistles. This is the ultimate Slate experience for your team.',
      monthlyPrice: 32,
      yearlyPrice: 268.8,
      savings: 'Save up to 30%',
      badge: null,
      buttonStyle: 'black',
      features: [
        { icon: FiWifi, label: '15GB Bandwidth' },
        { icon: FiLock, label: '64 Limit Support' }
      ],
      included: [
        'Add feature here',
        'Add feature here'
      ]
    },
    {
      name: 'Organizations',
      description: 'Need an enterprise solution? No problem - get in touch today.',
      monthlyPrice: null,
      yearlyPrice: null,
      savings: null,
      badge: null,
      buttonStyle: 'transparent',
      features: [],
      included: [],
      ctaText: 'Get Started',
      ctaSubtext: 'Enjoy customized support with a dedicated Slate team member.'
    }
  ];

  const getPrice = (plan) => {
    if (!plan.monthlyPrice) return null;
    return isYearly ? Math.floor(plan.yearlyPrice) : plan.monthlyPrice;
  };

  return (
    <div className="bg-[#EBECEF] min-h-screen py-16 md:py-32 px-6 md:px-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        {/* Top Badge */}
        <p className="text-[#3C4049] text-sm font-inter mb-8 inline-block">
          Free 14-Day Trial
        </p>

        {/* Main Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h1 
              className="text-[#002E25] font-medium leading-tight mb-8"
              style={{ fontSize: '72px', fontFamily: 'Archivo, sans-serif' }}
            >
              Our Plans scale <br />
              with your{' '}
              <span 
                className="px-4 py-2"
                style={{ backgroundColor: '#CDFA89' }}
              >
                Business
              </span>
            </h1>
          </div>

          {/* Toggle Section */}
          <div className="flex items-center justify-end gap-6 ">
            <div className="flex items-center gap-4 ">
              <span 
                className="text-sm font-inter "
                style={{ color: isYearly ? '#3C4049' : '#090C10' }}
              >
                Monthly
              </span>

              {/* Toggle Switch */}
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-12 h-7 cursor-pointer rounded-full transition-colors ${
                  isYearly ? 'bg-black' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    isYearly ? 'translate-x-0' : '-translate-x-5'
                  }`}
                />
              </button>

              <span 
                className="text-sm font-inter"
                style={{ color: isYearly ? '#090C10' : '#3C4049' }}
              >
                Yearly
              </span>
            </div>

            <div 
              className="px-4 py-1 rounded-full text-xs font-inter"
              style={{ backgroundColor: '#CDFA89', color: '#002E25' }}
            >
              30% Off
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative transition-all h-full flex flex-col ${
                plan.badge 
                  ? 'bg-white border-2 border-black shadow-lg scale-105' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-inter font-semibold"
                  style={{ backgroundColor: '#000', color: '#fff' }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 
                className="font-inter font-semibold mb-3"
                style={{ fontSize: '18px', color: '#090C10' }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p 
                className="font-inter mb-6 leading-relaxed flex-grow"
                style={{ fontSize: '14px', color: '#3C4049' }}
              >
                {plan.description}
              </p>

              {/* Savings Badge */}
              {plan.savings && (
                <div 
                  className="inline-block px-3 py-1 rounded-lg text-xs font-inter font-semibold mb-6"
                  style={{ backgroundColor: '#CDFA89', color: '#002E25' }}
                >
                  {plan.savings}
                </div>
              )}

              {/* Pricing */}
              {plan.monthlyPrice !== null ? (
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span 
                      className="font-inter font-semibold"
                      style={{ fontSize: '32px', color: '#090C10' }}
                    >
                      ${getPrice(plan)}.00
                    </span>
                    <span 
                      className="font-inter"
                      style={{ fontSize: '14px', color: '#3C4049' }}
                    >
                      / Month
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <p 
                    className="font-inter"
                    style={{ fontSize: '14px', color: '#3C4049' }}
                  >
                    {plan.ctaSubtext}
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold cursor-pointer font-inter mb-8 flex items-center justify-center gap-2 transition-all ${
                  plan.buttonStyle === 'black'
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-transparent border-2 border-gray-300 text-black hover:border-black cursor-pointer'
                }`}
              >
                {plan.ctaText || 'Get Started'}
                <FiArrowRight size={18} />
              </button>

              {/* Features List */}
              {plan.features.length > 0 && (
                <div className="space-y-4 mb-8 pb-8 border-b border-gray-200">
                  {plan.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <Icon 
                          size={20} 
                          style={{ color: '#090C10' }}
                        />
                        <span 
                          className="font-inter"
                          style={{ fontSize: '14px', color: '#3C4049' }}
                        >
                          {feature.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Included Features */}
              {plan.included.length > 0 && (
                <div className="mb-8">
                  <p 
                    className="font-inter font-semibold mb-4"
                    style={{ fontSize: '14px', color: '#090C10' }}
                  >
                    Featured Include :
                  </p>
                  <ul className="space-y-3">
                    {plan.included.map((item, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center gap-3"
                      >
                        <FiCheck 
                          size={18}
                          style={{ color: '#090C10' }}
                        />
                        <span 
                          className="font-inter"
                          style={{ fontSize: '14px', color: '#3C4049' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Compare Link */}
              <button 
                className="font-inter font-semibold mt-auto cursor-pointer pt-8 border-t border-gray-200 flex items-center gap-2 group"
                style={{ fontSize: '14px', color: '#090C10' }}
              >
                See Compare
                <FiArrowRight 
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Documentation Link for Organizations */}
              {plan.name === 'Organizations' && (
                <button 
                  className="font-inter text-sm mt-4 flex items-center gap-2"
                  style={{ color: '#3C4049' }}
                >
                  <span style={{ fontSize: '18px' }}>ⓘ</span>
                  View our Documentation
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default PricingSection;
