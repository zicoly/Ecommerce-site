import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import CartPage from './components/CartPage/CartPage';
import { Route, Routes } from 'react-router-dom';
import CartLayout from './components/CartPage/CartLayout/CartLayout';
import PaymentPage from './components/CartPage/PaymentPage';
import ResultPage from './components/CartPage/ResultPage';
import ShippingPage from './components/CartPage/ShippingPage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
    setCartCount(storedCart.length);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setCartCount(cartItems.length);
  }, [cartItems]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (productId: number): boolean => {
    if (cartItems.includes(productId)) {
      return true;
    } else {
      setCartItems(prevItems => [...prevItems, productId]);
      return false;
    }
  };

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  onCategorySelect={handleCategorySelect}
                  onSearch={setSearchQuery}
                  cartCount={cartCount}                
                />
                <Hero />
                <Products
                  selectedCategory={selectedCategory}
                  searchQuery={searchQuery}
                  onAddToCart={handleAddToCart}
                />
                <Footer />
              </>
            }
          />

          <Route path="cart" element={<CartLayout />}>
            <Route index element={<CartPage cartItems={[]} />} />
            <Route path="shipping" element={<ShippingPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="result" element={<ResultPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
