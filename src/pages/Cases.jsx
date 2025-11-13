import React from 'react';
import { Link } from 'react-router-dom';
import './Cases.css'; // Importa o CSS da página

function Cases() {
  return (
    <main>
      <section className="seção-hero-cases">
        <h1>Cases de sucesso</h1>
      </section>
      <section className="seção-p">
        <h3 className="meu-h3">Cases</h3>
        <h2 className="meu-h2">Provas da nossa excelência</h2>
      </section>

      <section className="cases-container">
        <div className="cases-group">
          <h2 id='titulo-secao'>Sistemas embarcados</h2>
          <div className="cases-row">

            <article className="card">
              <img src="imagens/index_cases/index_cases_mac.png" alt="fachada MacDonalds" />
              <h3>Case 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>


            <article className="card">
              <img src="imagens/index_cases/index_cases_petrobras.png" alt="fachada Petrobras" />
              <h3>Case 2</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>

            <article className="card">
              <img src="imagens/index_cases/index_cases_itau.png" alt="fachada Itaú" />
              <h3>Case 3</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
            <article className="card">
              <img src="imagens/index_cases/nubank.png" alt="nubank" />
              <h3>Case 4</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
          </div>
        </div>

        <div className="cases-group">
          <h2 id='titulo-secao'>Projetos Front-end/Back-end</h2>
          <div className="cases-row">

            <article className="card">
              <img src="imagens/index_cases/index_cases_nasa.png" alt="logo NASA" />
              <h3>Case 5</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
            <article className="card">
              <img src="imagens/index_cases/index_cases_governo.png" alt="logo Governo do Brasil" />
              <h3>Case 6</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
            <article className="card">
              <img src="imagens/index_cases/index_cases_sony.png" alt="fachada Sony" />
              <h3>Case 7</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
            <article className="card">
              <img src="imagens/index_cases/amazon.png" alt="amazon" />
              <h3>Case 8</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
          </div>
        </div>

        <div className="cases-group">
          <h2 id='titulo-secao'>Projetos Mobile</h2>
          <div className="cases-row">

            <article className="card">
              <img src="imagens/index_cases/ifood.png" alt="logo iFood" />
              <h3>Case 9</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
            <article className="card">
              <img src="imagens/index_cases/ambev.png" alt="logo Ambev" />
              <h3>Case 10</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
            <article className="card">
              <img src="imagens/index_cases/celular.png" alt="Zee Now" />
              <h3>Case 11</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
            <article className="card">
              <img src="imagens/index_cases/microsoft.png" alt="microsoft" />
              <h3>Case 12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/CasesAbertos">→</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cases;