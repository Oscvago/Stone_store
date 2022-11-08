import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./components/Home";
import { ProductDetails } from './components/products/ProductDetails';
//Router brought from react-router-dom (different from express)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProducts from "./components/pages/ListProducts";
import ListVentas from "./components/pages/ListVentas";
import { ModificarProducto } from "./components/pages/UpdateProducts";
import { NuevoProducto } from "./components/pages/NewProducts";
import ShoppingCart from "./components/shop/ShoppingCart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />}/>
            <Route path="/productos" element={<ListProducts />} />
            <Route path="/ventas" element={<ListVentas />} />
            <Route path="/producto/:id" element={<ModificarProducto />} />
            <Route path="/producto/new" element={<NuevoProducto />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
