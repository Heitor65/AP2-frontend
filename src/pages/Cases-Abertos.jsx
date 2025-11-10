import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Cases-Abertos.css';

export default function Cases() {
  return (
    <main className="cases">
      <section>
        <h1>Cases</h1>
      </section>

      <section className="titulo">
        <h2>
          Projeto Mobile <br />-<br /> Siri Cascudo
        </h2>
        {/* Imagem em baixa qualidade é normal, conforme seu comentário */}
        <img src="/imagens/siri-cascudo.jpeg" alt="Fachada do Siri Cascudo" />
      </section>

      <div className="container">
        <section>
          <div className="projeto">
            <h3>A dor do cliente</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestias, accusamus rem eius doloribus praesentium iste esse
              consectetur tempora cum sint iure magnam ipsa ea laborum, sit nam
              deleniti nostrum.
            </p>

            <h3>A solução</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestias, accusamus rem eius doloribus praesentium iste esse
              consectetur tempora cum sint iure magnam ipsa ea laborum, sit nam
              deleniti nostrum.
            </p>

            <h3>Imagens do Projeto</h3>
            <div className="galeria">
              <img
                src="/imagens/cozinha-siri-cascudo.jpeg"
                alt="Cozinha do Siri Cascudo"
              />
              <img
                src="/imagens/intererior-siri-cascudo.jpeg"
                alt="Interior do Siri Cascudo"
              />
            </div>
          </div>
        </section>

        <aside>
          <h3>Outros Projetos</h3>

          <article className="card">
            <img
              src="/imagens/index_cases/index_cases_mac.png"
              alt="Fachada do McDonald's"
            />
            <div className="card-body">
              <h4>Case 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a className="arrow" href="/case-aberto.html" aria-label="Abrir Case 1">
                →
              </a>
            </div>
          </article>

          <article className="card">
            <img
              src="/imagens/index_cases/index_cases_mac.png"
              alt="Fachada do McDonald's"
            />
            <div className="card-body">
              <h4>Case 2</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a className="arrow" href="/case-aberto.html" aria-label="Abrir Case 2">
                →
              </a>
            </div>
          </article>
        </aside>
      </div>

      <section className="cta">
        <h4>Gostou do nosso trabalho</h4>
        <p>
          Quer solucionar o seu problema e também fazer parte como um dos nossos
          cases de sucesso?
        </p>
        <a className="cta-btn" href="/fale-conosco.html">
          Inscreva-se
        </a>
      </section>
    </main>
  );
}