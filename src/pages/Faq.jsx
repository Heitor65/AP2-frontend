import React from 'react';
import './Faq.css';

function Faq() {
 return (
    <main className="faqmain">
        <h1>Perguntas Frequentes</h1>
        <p class="subtitulo">Encontre respostas rapidas para as principais duvidas.</p>

        <section className="faq-categoria">
            <h2>Geral</h2>

            <details>
                <summary>O serviço é gratuito para empresas?</summary>
                <p>Resposta</p>
            </details>

            <details>
                <summary>Pequenos negócios e startups podem participar?</summary>
                <p>Resposta</p>
            </details>

            <details>
                <summary>Os projetos enviados ficam públicos?</summary>
                <p>Resposta</p>
            </details>

            <details>
                <summary>Posso acompanhar o andamento do meu problema depois de enviado?</summary>
                <p>Resposta</p>
            </details>
        </section>

        <section className="faq-categoria">
            <h2>Sobre</h2>

            <details>
                <summary>Quem está por trás da plataforma?</summary>
                <p>Resposta</p>
            </details>

            <details>
                <summary>Qual é a missão do projeto?</summary>
                <p>Resposta</p>
            </details>

            <details>
                <summary>Como vocês selecionam os parceiros que participam?</summary>
                <p>Resposta</p>
            </details>

            <details>
                <summary>Como posso entrar em contato para mais informações?</summary>
                <p>Resposta</p>
            </details>

        </section>

        <section className="faq-categoria">
            <h2>Processo</h2>

            <details>
                <summary>Como funciona o envio de um problema pela empresa?</summary>
                <p>Aqui vai a resposta sobre o processo de envio.</p>
            </details>

            <details>
                <summary>O que acontece após o envio do formulário?</summary>
                <p>Aqui vai a resposta sobre os próximos passos após o envio.</p>
            </details>

            <details>
                <summary>Há algum prazo para a universidade dar retorno?</summary>
                <p>Aqui vai a resposta sobre os prazos de retorno.</p>
            </details>

            <details>
                <summary>À quem pertence os projetos realizados?</summary>
                <p>Aqui vai a resposta sobre a propriedade intelectual dos projetos.</p>
            </details>
        </section>

        <section id="duvida">
            <div className="duvida-box">
                <h2>Não achou a resposta para sua dúvida?</h2>

                <form>
                    <label for="duvida">Digite aqui a sua pergunta!</label>
                    <input type="text" id="duvida" placeholder="Mande aqui sua dúvida" required />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    </main>
 );
}

export default Faq