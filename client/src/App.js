import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Barra from "./components/navegacion/Navbar";
import About from './components/paginas/About';
import Inicio from './components/paginas/Buscador';
import ModificarProducto from './components/paginas/ModificarProducto';
import Productos from './components/paginas/Productos';

function App() {
  return (
    <div className="app container">
      <div>
        <Router>
          <Barra/>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/modificar/:producto_id' element={<ModificarProducto/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
