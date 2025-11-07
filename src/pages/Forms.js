import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Forms() {
 return(
    <main>
        <h1>Fale Conosco</h1>

        <form>

            <div class="texto">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Nome" required/>
            </div>

            <div class="texto">
                <label for="email">E-mail</label>
                <input type="text" id="email" name="email" placeholder="exemplo@email.com" required/>
            </div>

            <div class="texto">
                <label for="telefone">Telefone</label>
                <input type="text" id="telefone" name="telefone" placeholder="xx xxxxx-xxxx" required/>
            </div>

            <div class="texto">
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cnpj" placeholder="00.000.000/0000-00" required/>
            </div>

            <div class="texto">
                <label for="setores">Qual setor da sua empresa?</label>
                <select name="setores" id="setores" required>
                    <option value="" disabled selected>Selecione</option>
                    <option value="setor1">Setor 1</option>
                    <option value="setor2">Setor 2</option>
                    <option value="setor 3">Setor 3</option>
                </select>
            </div>

            <div class="texto">
                <label for="tamanho">Qual o tamanho da sua empresa?</label>
                <select name="tamanho" id="tamanho" required>
                    <option value="" disabled selected>Selecione</option>
                    <option value="grande">Grande</option>
                    <option value="média">Média</option>
                    <option value="pequena">Pequena</option>
                </select>
            </div>

            <fieldset class="texto">
                <legend>Você já participa do nosso HUBS?</legend>

                <div class="radio">
                    <input type="radio" id="hubs-sim" name="hubs" value="sim" required/>
                    <label for="hubs-sim">Sim</label>
                </div>

                <div class="radio">
                    <input type="radio" id="hubs-nao" name="hubs" value="nao"/>
                    <label for="hubs-nao">Não</label>
                </div>
            </fieldset>

            <div class="texto">
                <label for="mensagem">Deixa uma Mensagem</label>
                <textarea name="mensagem" id="mensagem" rows="6"
                    placeholder="Nos deixe uma observação ou mensagem!"></textarea>
            </div>

            <div class="texto">
                <button type="submit">Enviar formulário</button>
            </div>
        </form>

    </main>
 );
}

export default Forms