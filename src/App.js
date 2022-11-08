import "./App.css";
import React from "react";
import Header from "./components/layout/Header";

//Login imports
import Main from "./components/Main";
import Signup from "./components/signup";
import Signin from "./components/signin"

import { Footer } from "./components/layout/Footer";
import Home from "./components/Home";
import { ProductDetails } from './components/products/ProductDetails';
//Router brought from react-router-dom (different from express)
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token")
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />

            {user && <Route path="/" exact element={<Main/>} />}
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
