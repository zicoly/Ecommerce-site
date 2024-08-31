import React from 'react';
import {
  FaTruck,
  FaUsers,
  FaUndo,
  FaCreditCard,
  FaWallet,
} from 'react-icons/fa';

const slideAndFade = `
@keyframes slideAndFade {
  from {
    opacity: 0;
    transform: translateX(50%) scale(0.2);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
`;

function Hero() {
  return (
    <div className="h-[100vh] flex flex-col mb-16">
      <div className="relative overflow-hidden flex-1 w-full mb-5">
        <style>{slideAndFade}</style>
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-[1400px] object-cover opacity-90"
        >
          <source src="/video/Fashion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative flex items-center justify-center mt-20 h-full bg-gradient-to-t from-black to-transparent text-white text-center p-4">
          <div className="">
            <h1
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                animation: 'slideAndFade 3s ease-out',
              }}
              className="md:text-6xl text-3xl font-bold md:mb-4 mb-2 opacity-50 whitespace-nowrap"
            >
              Discover Your Style
            </h1>
            <p
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                animation: 'slideAndFade 4s ease-out',
              }}
              className="md:text-4xl text-lg opacity-50"
            >
              Explore the Latest Trends in Fashion and Electronics.
            </p>
          </div>
        </div>
      </div>

      <div className="list-icons md:pl-10 md:pr-10 mt-2 flex justify-around my-3 mx-4 mb-3 p-3 border border-[#dbdbdb] md:overflow-hidden overflow-auto hide-scrollbar">
        <div className="flex items-center space-x-4 px-8 md:px-12 border-r border-[#dbdbdb]">
          <FaTruck className="text-4xl md:text-5xl text-[#ffac53]" />
          <div className="text">
            <span className="font-bold text-[#1e1e26] text-[13px] md:text-base uppercase whitespace-nowrap">
              Free delivery
            </span>
            <br />
            <span className="text-xs md:text-base hidden md:block">From $49.99</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-8 md:px-12 border-r border-[#dbdbdb]">
          <FaUsers className="text-4xl md:text-5xl text-[#ffac53]" />
          <div className="text">
            <span className="font-bold text-[#1e1e26] text-[13px] md:text-base uppercase whitespace-nowrap">
              Support 24/7
            </span>
            <br />
            <span className="text-xs md:text-base hidden md:block">Online 24 Hours</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-8 md:px-12 border-r border-[#dbdbdb]">
          <FaUndo className="text-4xl md:text-5xl text-[#ffac53]" />
          <div className="text">
            <span className="font-bold text-[#1e1e26] text-[13px] md:text-base uppercase whitespace-nowrap">
              Free return
            </span>
            <br />
            <span className="text-xs md:text-base hidden md:block">365 A Day</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-8 md:px-12 border-r border-[#dbdbdb]">
          <FaCreditCard className="text-4xl md:text-5xl text-[#ffac53]" />
          <div className="text">
            <span className="font-bold text-[#1e1e26] text-[13px] md:text-base uppercase whitespace-nowrap">
              Payment Method
            </span>
            <br />
            <span className="text-xs md:text-base hidden md:block">Secure Payment</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-8">
          <FaWallet className="text-4xl md:text-5xl text-[#ffac53]" />
          <div className="text last-child">
            <span className="font-bold text-[#1e1e26] text-[13px] md:text-base uppercase whitespace-nowrap">
              Big saving
            </span>
            <br />
            <span className="text-xs md:text-base hidden md:block">Weekend Sales</span>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default Hero;
