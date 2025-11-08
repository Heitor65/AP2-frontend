
import React from 'react';
import './Contato.css'; // Importa os estilos da página
import iconInsta from '../assets/imagens/footer_icones/instagram-brands-solid-full.svg';
import iconFace from '../assets/imagens/footer_icones/facebook-brands-solid-full.svg';
import iconWpp from '../assets/imagens/footer_icones/whatsapp-brands-solid-full.svg';

function Contato() {
  return (
    <main>
      <section className="pagina-contato">
        <h1>Contate-nos!</h1>
        <div className="container-contato">
          
          {/* Formulário */}
          <div>
            <form>
              <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="numero">Número</label>
                <input type="tel" id="numero" name="numero" />
              </div>
              <div>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem"></textarea>
              </div>
              <button type="submit">Contate-nos!</button>
            </form>
          </div>

          {/* Informações */}
          <div className="informacoes">
            <h2>Informações</h2>
            <p>emailrandom@ibmec.com</p>
            <p>+99 999999999</p>
            <p>endereço aleatório da Ibmec,<br /> rua xxx, país xxx</p>

            <div className="redes">
              <a href="#"><img src={iconInsta} alt="Instagram" /></a>
              <a href="#"><img src={iconFace} alt="Facebook" /></a>
              <a href="#"><img src={iconWpp} alt="WhatsApp" /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contato;