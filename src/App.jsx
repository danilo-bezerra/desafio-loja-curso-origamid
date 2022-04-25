import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Produtos from "./components/Produtos";
import Contato from './components/Contato';
import Header from './components/Header';
import Produto from './components/Produto';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} end />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produto/:id/" element={<Produto />} />
          <Route path='*' element={<>Página não encontrada</>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
