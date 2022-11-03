import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./components/Home";
import { ProductDetails } from './components/products/ProductDetails';
//Imports Loggin
import Main from "./components/Main";
import Signup from "./components/signup"
import Signin from "./components/signin/index"


//Router brought from react-router-dom (different from express)
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />

            <Route path="/" exact element={<Main/>} />
            <Route path = "/signup" exact element={<Signup/>} />
            <Route path = "/signin" exact element={<Signin/>} />
            <Route path = "/" exact element={<Navigate replace to="/signin" />} />

           
            <Route path="/product/:id" element={<ProductDetails />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
