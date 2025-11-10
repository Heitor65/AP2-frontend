import React from 'react';
// 1. CORRETO: Importa o Named Export 'groupedCases' (com chaves)
import { groupedCases } from './casesData.js'; 
// 2. CORRETO: Importa o Default Export 'Card' (sem chaves), como estava antes
import Card from './Card.jsx'; 
import './index.css';

function HomeCases() {
  return (
    <>
      <header>
        <section className="header-container">
          <a href="index.html">
            <img src="/imagens/index_cases/logo-ibmec.png" alt="Logo da Ibmec" />
          </a>
          {/* Adicione sua navegação (nav) aqui */}
        </section>
      </header>
        
      <main>
        {/* Seção Hero */}
        <section className="seção-hero">
            <h1>Cases de Sucesso</h1>
        </section>

        {/* Seção de Parágrafos */}
        <section className="seção-p">
            <h3 className="meu-h3">Cases</h3>
            <h2 className="meu-h2">Uma prova de nossa excelência</h2>
        </section>

        {/* Container Principal dos Cases - Renderiza os grupos e cards */}
        <section className="cases-container">
          {Object.entries(groupedCases).map(([groupName, cases]) => (
            <div key={groupName} className="cases-group">
              <h2>{groupName}</h2>
              <div className="cases-row">
                {cases.map(caseItem => (
                  <Card
                    key={caseItem.id}
                    imagemSrc={caseItem.img}
                    altText={caseItem.alt}
                    titulo={caseItem.titulo}
                    descricao={caseItem.desc}
                    linkHref={caseItem.link}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
        
      <footer>
        <div className="footer-container">
          {/* Coluna Logo */}
          <div className="footer-column logo-column">
            <img src="/imagens/footer_icones/logo-ibmec.png" alt="Logo da Ibmec" />
          </div>


          {/* Coluna Contato */}
          <div className="footer-column">
            <h3>Contato</h3>
            <ul>
              <li>email@email.com.br</li>
              <li>(99) 99999-9999</li>
              <li>Rua CR7 vasco 2026</li>
            </ul>
            <div className="social-icons">
                <a href="#"><img src="/imagens/footer_icones/instagram-brands-solid-full.svg" alt="ícone Instagram" /></a>
                <a href="#"><img src="/imagens/footer_icones/facebook-brands-solid-full.svg" alt="ícone Facebook" /></a>
                <a href="#"><img src="/imagens/footer_icones/whatsapp-brands-solid-full.svg" alt="ícone Whatsapp" /></a>
            </div>
          </div>
          {/* ... (outras colunas) ... */}
        </div>
      </footer>
    </>
  );
}

export default HomeCases;