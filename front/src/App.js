import './App.css';
import React from 'react';
import Headers from './components/layout/Headers';
import { Home } from './components/Home';
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
          </Routes>
        </div>
        
        
        
       
    </div>
    </Router>
  );
}

export default App;
