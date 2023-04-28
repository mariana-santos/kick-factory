import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/carrinho' element={ <Carrinho /> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;