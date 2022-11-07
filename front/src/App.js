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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
