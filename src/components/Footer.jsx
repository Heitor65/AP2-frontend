
import React from 'react';
import './Footer.css'; // Importa os estilos do Footer
import logoIbmec from '../assets/imagens/logo-ibmec.png';
import iconInsta from '../assets/imagens/footer_icones/instagram-brands-solid-full.svg';
import iconFace from '../assets/imagens/footer_icones/facebook-brands-solid-full.svg';
import iconWpp from '../assets/imagens/footer_icones/whatsapp-brands-solid-full.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column logo-column">
          <img src={logoIbmec} alt="logo da Ibmec" className="footer-logo" />
          <p>Alguma coisa sobre a empresa.</p>
        </div>

        <div className="footer-column">
          <h3>Navegação</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/cases">Cases de Sucesso</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/Forms" className="fale-conosco">Fale Conosco</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contato</h3>
          <ul>
            <li>email@email.com.br</li>
            <li>(99) 99999-9999</li>
            <li>Rua CR7 vasco 2026</li>
          </ul>
          <div className="social-icons">
            <a href="#"><img src={iconInsta} alt="ícone Instagram" /></a>
            <a href="#"><img src={iconFace} alt="ícone Facebook" /></a>
            <a href="#"><img src={iconWpp} alt="ícone Whatsapp" /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Políticas</h3>
          <ul>
            <li><a href="#">Política de Acessibilidade</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Código de Ética</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Sua Empresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;