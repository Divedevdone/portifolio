import React from "react";
import "./Curriculo.css";

const Curriculo = () => {
    return (
        <div className="container">
            <header>
                <h1>Leonardo Costa de Carvalho</h1>
                <p>São José dos Pinhais, PR | Não fumante | Disponível para mudanças e viagens</p>
                <p>E-mail: <a href="mailto:lelloleo0001@gmail.com">lelloleo0001@gmail.com</a> | <a href="https://wa.me/5541998556053" target="_blank">WhatsApp: 041 99855-6053</a></p>
                <p> <a href="https://www.linkedin.com/in/leonardo-de-carvalho-44b35b150" target="_blank">LinkedIn</a> |  <a href=" https://github.com/Divedevdone">Github</a>

                </p>
            </header>

            <section>
                <h2>Objetivo</h2>
                <p>Busco minha primeira oportunidade na área de tecnologia, pode ser estágio inclusive. Tenho experiência em informática e sistemas por sempre fazer projetinhos, além de estar cursando Análise e Desenvolvimento de Sistemas.</p>
            </section>

            <section>
                <h2>Experiência profissional</h2>
                <ul>
                    <p><strong>STV Serviços</strong> - Porteiro (Desde 25/01/2023 e atual)</p>
                    <p><strong>Clube Curitibano</strong> - Porteiro (15/01/2021 à 24/03/2022)</p>
                    <p><strong>Embrasil</strong> - Porteiro (15/01/2021 à 24/03/2022)</p>
                    <p><strong>Barth Transportes - PJ</strong> - Motorista (05/04/2022 à 26/12/2011)</p>
                    <p><strong>Sums Club</strong> - Conferente (19/11/2012 à 12/07/2013)</p>
                    <p><strong>Drogaria São Paulo</strong> - Almoxarifado (19/11/2004 à 24/04/2007)</p>
                </ul>
            </section>

            <section>
                <h2>Formação Acadêmica</h2>
                <ul>
                    <p>Ensino Médio Completo</p>
                    <p>Curso de Informática - Starbit Informática</p>
                    <p>Graduação: Análise e Desenvolvimento de Sistemas - PUC Paraná</p>
                    <p>Período da graduação é de 01/2023 até 07/2025</p>
                </ul>
            </section>
        </div>
    );
};

export default Curriculo;
