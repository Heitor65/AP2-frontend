
import React from 'react';
import './Header.css'; // Importa os estilos do Header
import logoIbmec from '../assets/imagens/logo-ibmec.png'; // Importa a imagem

function Header() {
  return (
    <header>
      <section className="header-container">
        <a href="index.html"><img src={logoIbmec} alt="Logo da Ibmec" /></a>

        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="sobre.html">Sobre Nós</a></li>
            <li><a href="cases.html">Cases de Sucesso</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li><a href="fale-conosco.html" className="fale-conosco">Fale Conosco</a></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;