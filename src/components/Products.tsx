import React from 'react';
import ProductCards from './productCards';
import { ProductProps } from '../utils/types';

function Products({ selectedCategory, searchQuery, onAddToCart }: ProductProps) {
  return (
    <div>
      <div className="m-5 mb-0 border-b border-[#dbdbdb]">
        <h2 className="w-[220px] text-center h-auto uppercase text-lg font-bold border-b-2 border-[#ffac53] text-[#1e1e26] md:ml-8 ml-0">
        {selectedCategory}
        </h2>
      </div>

      <ProductCards selectedCategory={selectedCategory} searchQuery={searchQuery} onAddToCart={onAddToCart}/>
    </div>
  );
}

export default Products;
