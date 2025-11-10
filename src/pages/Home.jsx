
import React from 'react';
import './Home.css'; // Importa o CSS específico da Home

// Importa as imagens
import imgSobreNos from '../assets/imagens/index_sobre_nos.png';
import imgCaseMac from '../assets/imagens/index_cases/index_cases_mac.png';
import imgCasePetro from '../assets/imagens/index_cases/index_cases_petrobras.png';
import imgCaseItau from '../assets/imagens/index_cases/index_cases_itau.png';
import imgCaseNasa from '../assets/imagens/index_cases/index_cases_nasa.png';
import imgCaseGov from '../assets/imagens/index_cases/index_cases_governo.png';
import imgCaseSony from '../assets/imagens/index_cases/index_cases_sony.png';

function Home() {
  return (
    <main>
      <section className="hero"> {/* Hero section */}
        <h1>Título</h1>
        <h2>Lorem ipsum, dolor sit amet</h2>
        <a href="fale-conosco.html">Fale conosco</a>
      </section>

      <section className="sobre-section"> {/* sobre nós */}
        <div>
          <h2>Sobre nós</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <img src={imgSobreNos} alt="Mesa de tabalho com laptops e gadgets" />
      </section>

      <section className="dados-container"> {/* dados */}
        <h2>Resultado com excelência</h2>
        <div>
          <div>
            <p>lorem ipsum dolor sit</p>
          </div>
          <div>
            <p>74893+ projetos feitos</p>
          </div>
          <div>
            <p>12000% de taxa de satisfação</p>
          </div>
          <div>
            <p>lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </section>

      <section className="cases-container"> {/* mini cases */}
        <h2>Cases de Sucesso</h2>
        <div>
          <article className="card">
            <img src={imgCaseMac} alt="fachada MacDonalds" />
            <h3>Case 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a href="case-aberto.html">→</a>
          </article>
          <article className="card">
            <img src={imgCasePetro} alt="fachada Petrobras" />
            <h3>Case 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a href="case-aberto.html">→</a>
          </article>
          <article className="card">
            <img src={imgCaseItau} alt="Desenho de uma fachada do banco Itaú" />
            <h3>Case 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a href="case-aberto.html">→</a>
          </article>
          <article className="card">
            <img src={imgCaseNasa} alt="logo da nasa" />
            <h3>Case 4</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a href="case-aberto.html">→</a>
          </article>
          <article className="card">
            <img src={imgCaseGov} alt="logo do Governo Federal do Brasil" />
            <h3>Case 5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a href="case-aberto.html">→</a>
          </article>
          <article className="card">
            <img src={imgCaseSony} alt="fachada da Sony" />
            <h3>Case 6</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a href="case-aberto.html">→</a>
          </article>
        </div>
      </section>

      <section className="relatos"> {/* relatos */}
        <h2>Relatos de empresas parceiras</h2>
        <article>
          <p>“Antes eu vivia perdido com meu estoque: algumas bebidas acabavam rapidinho e outras ficavam
            encalhadas. Desde que instalei esse sistema que controla tudo automaticamente, consigo ver o que tá
            acabando, receber alertas e planejar minhas compras sem erro. Hoje meu bar tá mais organizado, gasto
            menos e nunca falta nada pros clientes!”</p>
          <p><strong><em>Tio Zé, Barzinho do Tio Zé</em></strong></p>
        </article>
      </section>
    </main>
  );
}

export default Home;