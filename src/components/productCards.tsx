/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../utils/products';
import StarGenerator from '../utils/StarGenerator';
import { ProductProps } from '../utils/types';

function ProductCards({ selectedCategory, searchQuery, onAddToCart }: ProductProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

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

  const filteredProducts = products.filter(product =>
    (selectedCategory === 'All categories' || product.category === selectedCategory.toLowerCase()) &&
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (productId: number) => {
    const isInCart = onAddToCart(productId);
  
    if (!isInCart) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
      cart.push(productId);
  
      localStorage.setItem('cart', JSON.stringify(cart));
  
      setModalContent('Added!');
    } else {
      setModalContent('Already in cart');
    }
  
    setModalVisible(true);
  
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };
  

  if (loading) {
    return <p className='text-xl text-center my-5'>Loading...</p>;
  }

  if (error) {
    return <p className='text-xl text-red-500 text-center my-5'>Error: {error}</p>;
  }

  return (
    <div className="relative">
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full p-4 bg-green-400 bg-opacity-65 text-black text-center z-50">
          {modalContent}
        </div>
      )}

      <div className="product-cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 pb-20 bg-[#F5F9FC]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="card border p-4 flex flex-col items-center justify-between relative h-full bg-white rounded-[20px] shadow-xl">
              <a className="w-full flex justify-center cursor-default" id={`${product.id}`}>
                <picture className="w-3/4 hover:scale-105 cursor-pointer">
                  <img src={product.image} alt="Product" className="object-contain md:h-48 h-40 w-full" />
                </picture>
              </a>
              <div className="rating flex mt-4">
                <StarGenerator rating={product.rating.rate} />
              </div>
              <h2 className="title md:text-lg text-xs font-semibold mt-2 text-center">{product.title}</h2>
              <strong className="price text-xl font-bold mt-2">${product.price}</strong>
              <button 
                className="w-auto bg-[#424253] hover:bg-[#000] text-white mt-4 md:px-4 px-3 py-2 rounded-[8px] md:text-base text-[13px]" 
                data-id={product.id}
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className='text-xl text-center my-5 whitespace-nowrap'>No products match your search.</p>
        )}
      </div>
    </div>
  );
}

export default ProductCards;
