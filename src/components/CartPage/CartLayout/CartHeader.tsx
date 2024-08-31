import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../../utils/CartNavItems';

function CartHeader() {
  const location = useLocation();

  return (
    <div>
      <nav className="flex justify-center mb-4 gap-4">
        {navItems.map(({ path, icon: Icon, label, rotateIcon }) => {
          const isActive =
            (location.pathname === `/cart` && path === '/cart') ||
            location.pathname.startsWith(`/cart/${path}`);
          return (
            <Link
              key={path}
              to={`/cart${path === '/cart' ? '' : `/${path}`}`}
              className={`flex flex-col items-center px-20 py-2 rounded
                ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-700 to-[#f4cb9f] text-white'
                    : 'bg-white text-gray-400'
                }`}
            >
              <div style={rotateIcon ? { transform: 'rotate(-45deg)' } : {}}>
                <Icon className="text-6xl" />
              </div>
              <span className="text-lg font-semibold">{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default CartHeader;
