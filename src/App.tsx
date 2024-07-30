import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
