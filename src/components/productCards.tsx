/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../utils/products';
// import { FaHeart } from 'react-icons/fa';
import StarGenerator from '../utils/StarGenerator';

function ProductCards() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className='text-red-500 mx-auto my-5'>Error: {error}</div>;
  }

  return (
    <div className="product-cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 pb-20 bg-[#F5F9FC]">
      {products.map((product) => (
        <div key={product.id} className="card border p-4 flex flex-col items-center justify-between relative h-full bg-white rounded-[20px] shadow-xl">
          {/* <div className="heart-container absolute top-4 right-4">
            <FaHeart className="text-2xl text-gray-500" />
          </div> */}
          <a className="w-full flex justify-center cursor-default" id={`${product.id}`}>
            <picture className="w-3/4 hover:scale-105 cursor-pointer">
              <img src={product.image} alt="Product" className="object-contain md:h-48 h-40 w-full" />
            </picture>
          </a>
          <div className="rating flex mt-4">
            <StarGenerator rating={product.rating.rate} />
          </div>
          <h2 className="title text-lg font-semibold mt-2 text-center">{product.title}</h2>
          <strong className="price text-xl font-bold mt-2">${product.price}</strong>
          <button className="w-auto bg-[#424253] hover:bg-[#000] text-white mt-4 px-4 md:py-2 py-2 rounded-[8px]" data-id={product.id}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
