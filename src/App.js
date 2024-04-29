
import './App.css';
import Home from './Componet/Home';
import Navbar from './Componet/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './Componet/Products';
import Product from './Componet/Product';
import Cart from './Componet/Cart';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
