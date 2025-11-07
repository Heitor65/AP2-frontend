
import React from 'react';
import './Header.css'; 
import logoIbmec from '../assets/imagens/logo-ibmec.png'; 

function Header() {
  return (
    <header className="topo">
      <div className="logo-topo">
        <a href="index.html"><img src={logoIbmec} alt="Logo Ibmec" /></a>
      </div>
      <nav>
        <ul className="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="cases.html">Cases</a></li>
          <li><a href="sobre.html">Sobre</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contato.html">Contato</a></li>
          <li><a href="form.html" className="botao-topo">Fale conosco</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;