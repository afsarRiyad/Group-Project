import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../assets/images/footerLogo.webp"
import Container from './layouts/Container';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className=" bg-black">
      {/* Main Content Grid */}
      <Container className=' ' >
       <div className='text-white font-inter px-6 md:px-12 py-16 md:py-24'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ">
          <div className="flex flex-col justify-start">
            <div className="mb-8">
              <div className="flex items-center gap-3">
                  <img src={logo} alt="logo" />
              </div>
            </div>

            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              World class development and built for performance, Slate will deliver every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+6100000000"
                className="px-6 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-gray-500 transition-colors text-sm font-medium"
              >
                +(61) 0000 0000
              </a>
              <a
                href="mailto:slate@flowbase.co"
                className="px-6 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-gray-500 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <span>✉</span> slate@flowbase.co
              </a>
            </div>    
          </div>

          <div className="flex flex-col  md:justify-self-end lg:w-[320px] ">
            <h3 className="primaryTxt  text-white mb-6">
              Subscribe to get an update :
            </h3>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-4 ">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-4 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-lime-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-green text-slate-950 font-semibold rounded-full hover:bg-lime-300 transition-colors text-lg font-inter cursor-pointer"
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 my-12 md:my-16"></div>
 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 ">
                       {/* Social Icons */}
            <div className="flex gap-4 flex-col ">
            <div className='flex gap-4'>
                <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-lime-400 hover:border-lime-400 transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-lime-400 hover:border-lime-400 transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-lime-400 hover:border-lime-400 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </div>
             <div className="col-span-2 md:col-span-1">
            <p className="text-gray-500 text-xs">
              Template by{' '}
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                Flowbase
              </a>
              . Built for{' '}
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                Framer
              </a>
            </p>
                </div>
            </div>
          {/* Product Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Product
                </a>
              </li>
            </ul>
          </div>
          {/* Features Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Features</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Blog Single
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Customer
                </a>
              </li>
            </ul>
          </div>

          {/* Features Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Features</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Customer Single
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
       </div>
      </Container>
    </div>
  );
}

export default Footer