// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './pages/Contato'; // Importa a página de Contato

function App() {
  return (
    <>
      <Header />
      <Contato />
      <Footer />
    </>
  );
}

export default App;