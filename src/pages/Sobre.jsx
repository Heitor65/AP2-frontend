import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Sobre.css';
import ibmecBarra from '../assets/imagens/IBMEC_BARRA.png';
import globo2 from '../assets/imagens/globo2.png';
import metaLogo from '../assets/imagens/Meta-Logo.png';
import wmccann2 from '../assets/imagens/wmccann2.png';
import starImg from '../assets/imagens/Star.png';

function Sobre() {
		return (
			<>
				<Header />

				<main className="pagina-sobre">
					<section className="hero">
						<figure className="hero-imagem">
							<img src={ibmecBarra} alt="Imagem da Ibmec Barra" />
						</figure>

						<div className="hero-conteudo">
							<h1>Sobre</h1>
							<div className="introducao">
								<p>
									Nosso objetivo é oferecer soluções acessíveis e intuitivas, sem complicação.
									Estamos sempre pensando em como melhorar a experiência de quem acessa: seja trazendo novidades,
									otimizando o que já funciona ou criando recursos inovadores.
								</p>
							</div>
						</div>
					</section>

					<div className="conteudo-principal">

						<hr className="separador-amarelo" />

						<section className="box">
							<h2>Quem Somos?</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eu rhoncus imperdiet, mi
								sem facilisis felis, vel.</p>
						</section>

						<section className="box">
							<h2>Missão</h2>
							<p>Nossa missão é conectar problemas reais de empresas com soluções inovadoras desenvolvidas por
								estudantes talentosos, fomentando o aprendizado prático.</p>
						</section>

						<section className="box">
							<h2>Visão</h2>
							<p>Ser a principal ponte entre o mundo acadêmico e o mercado, transformando a educação através de
								desafios reais.</p>
						</section>
					</div>

					<div className="destaques-geral">
						<section className="destaques-box">
							<h2>Valores</h2>
							<ul>
								<li>Inovação Contínua</li>
								<li>Colaboração</li>
								<li>Transparência</li>
								<li>Impacto Real</li>
								<li>Excelência Acadêmica</li>
							</ul>
						</section>

						<section className="destaques-box">
							<h2>Oferecemos</h2>
							<p>Soluções criativas para desafios de negócios, projetos de consultoria, desenvolvimento de protótipos
								e análise de dados, tudo com a energia e o conhecimento de nossos alunos.</p>
						</section>
					</div>

					<div className="conteudo-principal">
						<section className="parceiros-box">
							<h2>Empresas parceiras</h2>

							<div className="lista-parceiros">

								<div className="parceiro-item">
									<img src={globo2} alt="Logo da empresa Globo" />
									<div className="estrelas">
										<img src={starImg} alt="" />
										<img src={starImg} alt="" />
										<img src={starImg} alt="" />
									</div>
								</div>

								<div className="parceiro-item">
									<img src={metaLogo} alt="Logo da empresa Meta" />
									<div className="estrelas">
										<img src={starImg} alt="" />
										<img src={starImg} alt="" />
										<img src={starImg} alt="" />
									</div>
								</div>

								<div className="parceiro-item">
									<img src={wmccann2} alt="Logo da empresa WMcCann" />
									<div className="estrelas">
										<img src={starImg} alt="" />
										<img src={starImg} alt="" />
										<img src={starImg} alt="" />
									</div>
								</div>

							</div>
						</section>
					</div>
				</main>

				<Footer />
			</>
		);
}

export default Sobre;
