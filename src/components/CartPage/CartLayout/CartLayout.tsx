import React from 'react';
import { Outlet } from 'react-router-dom';
import CartHeader from './CartHeader';

function CartLayout() {
  return (
    <div className="bg-[#F5F9FC]">
      <CartHeader />
      <Outlet />
    </div>
  );
}

export default CartLayout;
