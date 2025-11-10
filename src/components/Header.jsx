import React from 'react';
import './Header.css';
import logoIbmec from '../assets/imagens/logo-ibmec.png';
// 1. Importe o Link
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <section className="header-container">
        {/* 2. Troque <a> por <Link> e href por "to" */}
        <Link to="/"><img src={logoIbmec} alt="Logo da Ibmec" /></Link>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/cases">Cases de Sucesso</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/fale-conosco" className="fale-conosco">Fale Conosco</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;