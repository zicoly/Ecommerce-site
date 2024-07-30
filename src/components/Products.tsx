import React from 'react';
import ProductCards from './productCards';

function Products() {
  return (
    <div>
      <div className="m-5 mb-0 border-b border-[#dbdbdb]">
        <h2 className="w-[220px] text-center h-auto uppercase text-lg font-bold border-b-2 border-[#ffac53] text-[#1e1e26] ml-8">
          All categories
        </h2>
      </div>

      {/* Product cards goes here */}
      <ProductCards />
    </div>
  );
}

export default Products;
