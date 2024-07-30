/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const fontFamily = `
    li, p {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`;

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto md:px-20 px-4">
        <div className="flex flex-wrap justify-between">
          <style>{fontFamily}</style>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4 font-[cursive]">LOVEFEM</h2>
            <p className="w-64">
              Empowering self-expression and embracing diversity. Join us on a
              journey where every purchase makes a positive impact. Together,
              let's create a world where beauty knows no bounds.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4 font-[cursive]">PRODUCT</h2>
            <ul>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">Men's clothing</a>
              </li>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">Jewelry</a>
              </li>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">Electronics</a>
              </li>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">
                  Women's clothing
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4 font-[cursive]">COMPANY</h2>
            <ul>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">About Us</a>
              </li>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">Sign-in</a>
              </li>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">Log-in</a>
              </li>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold mb-4 font-[cursive]">FEEDBACK</h2>
            <ul>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">
                  Leave a Feedback
                </a>
              </li>
              <li className="md:mb-4 mb-2">
                <a href="mailto:info@example.com" className="hover:underline">
                  Email: info@example.com
                </a>
              </li>
              <li className="md:mb-4 mb-2">
                <a href="tel:+123456789" className="hover:underline">
                  Phone: +123456789
                </a>
              </li>
              <li className="md:mb-4 mb-2">
                <a className="cursor-pointer hover:underline">
                  Address: 123 Main St, City, Country
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[#f4cb9f] pt-6 text-center md:flex md:items-center md:justify-center md:space-x-16">
          <p>&copy; 2024 zicoly. All rights reserved.</p>
          <div className="flex justify-center items-center mt-4 md:mt-0">
            <a className="cursor-pointer text-gray-200 mx-2 hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a className="cursor-pointer text-gray-200 mx-2 hover:text-gray-400">
              <FaTwitter />
            </a>
            <a className="cursor-pointer text-gray-200 mx-2 hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <a className="cursor-pointer text-gray-200 mx-4 hover:underline">
              Privacy Policy
            </a>
            <a className="cursor-pointer text-gray-200 mx-4 hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
