import './App.css';
import React from 'react';
import Headers from './components/layout/Headers';
import { Home } from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
// Router del front
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        
        <Headers/>
        <div className='container container-fluid'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Home' element={<Home />}/>
            <Route path='/producto/:id' element={<ProductDetails />}/>
          </Routes>
        </div>
        
        
        
       
    </div>
    </Router>
  );
}

export default App;
