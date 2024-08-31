import React, { useEffect, useState } from 'react';
import {
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaListAlt,
  FaTshirt,
  FaGem,
  FaTv,
  FaFemale,
} from 'react-icons/fa';
import { HeaderProps } from '../utils/types';
import { GiTwirlyFlower } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Header({ onCategorySelect, onSearch, cartCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header');
      const topBar = document.querySelector('#top-bar');
      if (header && topBar) {
        if (window.scrollY > 50) {
          topBar.classList.add('hidden');
          header.classList.add('shadow-lg');
        } else {
          topBar.classList.remove('hidden');
          header.classList.remove('shadow-lg');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryChange = (e: { target: { value: any } }) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    onCategorySelect(selected);

    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);

    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <header
      id="header"
      className="fixed top-0 w-full z-10 mb-2 bg-[#f4cb9f] transition-all duration-300 ease-in-out"
    >
      <div
        id="top-bar"
        className="text-center bg-[#050507] text-white uppercase h-9 font-semibold text-lg transition-all duration-300 ease-in-out"
      >
        <span>E-Store</span>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 md:px-10 px-4">
        <div className="flex items-center justify-between w-full md:w-full mb-4 md:mb-0">
          <div className="md:hidden flex items-center space-x-4 mr-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              <FaBars />
            </button>
          </div>
          <div className="text-2xl md:text-3xl font-bold font-[cursive] uppercase flex items-center">
            Zicoly
            <GiTwirlyFlower className="ml-2 text-orange-700" />
          </div>

          <div className="hidden md:block mx-auto space-x-4 w-[45%]">
            <div className="flex items-center bg-white text-black rounded-full px-2 py-1 w-full md:w-full">
              <select
                className="bg-white text-black rounded-l-full md:px-4 py-2 outline-none border-r border-gray-500"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option>All categories</option>
                <option>Men's clothing</option>
                <option>jewelery</option>
                <option>Electronics</option>
                <option>Women's clothing</option>
              </select>
              <input
                type="text"
                placeholder="Search here"
                className="flex-grow px-4 py-2 outline-offset-1 outline-[#f4cb9f] rounded-[8px]"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="flex items-center space-x-6 ml-auto w-auto">
            <div className="relative cursor-pointer flex flex-col items-center">
              <FaHeart className="md:text-xl text-2xl" />
              <span className="md:block hidden text-sm md:text-base font-medium text-[#1e1e26]">
                Your Wishlist
              </span>
            </div>
            <Link to="/cart">
              <div className="relative cursor-pointer flex flex-col items-center">
                <FaShoppingCart className="md:text-xl text-2xl" />
                <span className="md:block hidden text-sm md:text-base font-medium text-[#1e1e26]">
                  Your Cart
                </span>
                <span className="bg-red-500 text-white rounded-full text-xs absolute -top-2 md:right-3 -right-2 w-4 h-4 text-center">
                  {cartCount}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-around space-x-4 w-full md:w-auto">
          <div className="hidden md:flex items-center bg-white text-black rounded-full px-2 py-1 w-full md:w-auto">
            <select
              className="bg-white text-black rounded-l-full px-4 py-2 outline-none border-r border-gray-500"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option>All categories</option>
              <option>Men's clothing</option>
              <option>jewelery</option>
              <option>Electronics</option>
              <option>Women's clothing</option>
            </select>
          </div>
          <div className="flex items-center bg-white text-black rounded-full px-2 py-1 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search here"
              className="flex-grow px-4 py-2 outline-offset-1 outline-[#f4cb9f] rounded-[8px]"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-80 h-full bg-[#1e1e26] text-white transition-transform duration-300 transform translate-x-0">
          <div className="flex flex-col p-4">
            <div className="flex items-center mb-4">
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
              <div className="text-2xl font-bold uppercase font-[cursive] ml-6 flex items-center">
                Zicoly
                <GiTwirlyFlower className="ml-2 text-orange-700" />
              </div>
            </div>
            <h2 className="text-xs font-semibold mb-2 border-t border-white pt-2">
              OUR CATEGORIES
            </h2>
            <ul className="space-y-4 mt-2">
              <li className="flex items-center space-x-4 cursor-pointer">
                <FaListAlt />
                <span>All categories</span>
              </li>
              <li className="flex items-center space-x-4 cursor-pointer">
                <FaTshirt />
                <span>Men's clothing</span>
              </li>
              <li className="flex items-center space-x-4 cursor-pointer">
                <FaGem />
                <span>jewelery</span>
              </li>
              <li className="flex items-center space-x-4 cursor-pointer">
                <FaTv />
                <span>Electronics</span>
              </li>
              <li className="flex items-center space-x-4 cursor-pointer">
                <FaFemale />
                <span>Women's clothing</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
