<<<<<<< HEAD
import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./components/Home";
import { ProductDetails } from './components/products/ProductDetails';
//Router brought from react-router-dom (different from express)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
=======
import './App.css';
import React from 'react';
import Headers from './components/layout/Headers';
import { Home } from './components/Home';
// Router del front
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> 4934fdf95e4744cfa83a7bd70011ae0878f4b5b3

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />}/>
          </Routes>
        </div>
        <Footer />
      </div>
=======
    <div className="App">
        
        <Headers/>
        <div className='container container-fluid'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Home' element={<Home />}/>
          </Routes>
        </div>
        
        
        
       
    </div>
>>>>>>> 4934fdf95e4744cfa83a7bd70011ae0878f4b5b3
    </Router>
  );
}

export default App;
