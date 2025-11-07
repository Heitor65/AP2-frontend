import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';      
import Contato from './pages/Contato';   


function App() {
  return (
    // 3. Envolva tudo com <BrowserRouter>
    <BrowserRouter>
      <Header /> 
      
      {/* 4. Define a área onde as páginas vão trocar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;