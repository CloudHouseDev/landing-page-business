import React from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

import "./styles.css";

function AboutUs() {
    return (
        <>
            <SectionTitle text="Sobre Nós" />
            <div className="wrapper-about-us-section">
                <div className="box">
                    <strong>Missão</strong>
                    <br />
                    <span>
                        Alcançar a excelência no segmento, através de tecnologias
                        avançadas, oferecendo soluções corporativas e com alta relação
                        custo/benefício, de maneira a satisfazer as necessidades do
                        cliente.
                    </span>
                </div>
                <div className="box">
                    <strong className="text-title">Visão</strong>
                    <br />
                    <span>
                        Ser referencia nacional em atendimento técnico especializado.
                        Buscando sempre entender o cliente e resolver problemas com
                        eficiência, eficácia e inovação.
                    </span>
                </div>
                <div className="box">
                    <strong>Valores</strong>
                    <br />
                    <span>
                        Ética, transparência, pro atividade, competência, agilidade,
                        comprometimento e inovação, são os valores que mostram como
                        desenvolvemos o nosso trabalho.
                    </span>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
