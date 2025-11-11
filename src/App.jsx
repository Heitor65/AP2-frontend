import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';      
import Contato from './pages/Contato';
import Forms from './pages/Forms';   
import Sobre from './pages/Sobre';
import Faq from './pages/Faq';
import Cases from './pages/Cases';
import CasesAbertos from './pages/Cases-Abertos';


function App() {
  return (
    // 3. Envolva tudo com <BrowserRouter>
    <BrowserRouter>
      <Header /> 
      
      {/* 4. Define a área onde as páginas vão trocar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/CasesAbertos" element={<CasesAbertos />} />
      </Routes>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
