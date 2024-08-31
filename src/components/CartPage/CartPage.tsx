import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../../utils/products';

type CartPageProps = {
  cartItems: Product[];
};

const CartPage: React.FC<CartPageProps> = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadCart = async () => {
      const allProducts = await fetchProducts();
      setProducts(allProducts);

      const cart = JSON.parse(localStorage.getItem('cart') || '[]');

      const cartDetails = allProducts.filter(product => cart.includes(product.id));

      setCartItems(cartDetails);
    };

    loadCart();
  }, []);

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (sum, product) => sum + product.price * (product.quantity || 1),
      0
    );
    const tax = 10;
    const shipping = 10;
    const discount = 50;
    return subtotal + tax + shipping - discount;
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(
      cartItems.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, (product.quantity || 1) + change) }
          : product
      )
    );
  };

  return (
    <div className="p-4">
      <div className="flex">
        <div className="w-2/3 pr-4">
          {cartItems.map((product) => (
            <div key={product.id} className="flex items-center mb-4 border p-2">
              <div className="w-16 h-16 bg-gray-200 mr-4">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
              </div>
              <div className="flex-grow">
                <p>{product.title}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(product.id, -1)}
                    className="border px-2"
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, 1)}
                    className="border px-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="ml-4">${product.price * (product.quantity || 1)}</p>
              <button className="ml-4 text-red-500">×</button>
            </div>
          ))}
          <div className="flex mt-4">
            <button className="bg-gradient-to-r from-orange-700 to-[#f4cb9f] text-white px-4 py-2 rounded mr-2">
              COMPLETE SHOPPING
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded">
              CLEAN SHOPPING CART
            </button>
          </div>
        </div>
        <div className="w-1/3 bg-gray-100 p-4">
          <h2 className="font-bold mb-4">ORDER SUMMARY</h2>
          <div className="flex justify-between mb-2">
            <span>PRODUCTS</span>
            <span>
              ${cartItems.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>TAX</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>SHIPPING</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>DISCOUNT</span>
            <span>-$50.00</span>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>TOTAL</span>
            <span>${calculateTotal()}.00</span>
          </div>
          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />I have discount code!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
