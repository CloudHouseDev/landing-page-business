import React from "react";
import Lottie from "lottie-react";
import { CheckCircleOutlined } from "@ant-design/icons";

import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import ideaAnimation from "../../../assets/animations/ideaAnimation.json";

import "./styles.css";

function AboutUs() {
    return (
        <div className="wrapper-about-us-section">
            <SectionTitle
                text="Sobre Nós"
                className="remove-padding-title-section-about-us"
            />
            <aside className="wrapper-content-aside-text">
                <div className="wrapper-animation">
                    <Lottie animationData={ideaAnimation} loop />
                </div>
                <div className="wrapper-texts">
                    <p>
                        <CheckCircleOutlined />A Cloud House IT tem como principal
                        objetivo a finalidade de alavancar o negócio de seus clientes,
                        tornando-os mais lucrativos e competitivos. Através de um amplo
                        conhecimento de mercado e da utilização de softwares de qualidade,
                        a empresa consegue combinar inteligência e tecnologia para
                        oferecer soluções eficientes para processos complexos. Essas
                        soluções visam gerar um aumento significativo na produtividade e
                        melhorar os resultados dos clientes.
                    </p>
                    <br />
                    <p>
                        <CheckCircleOutlined />
                        Entre alguns serviços oferecidos pela empresa, estão a consultoria
                        de TI, gerenciamento em nuvem e hospedagem, criação de sites e
                        plataformas web, desenvolvimento de aplicativos personalizados,
                        desenvolvimento de microsserviços e monólitos, e análise de
                        sistemas e testes automatizados. Esses serviços são realizados com
                        o máximo de competência, agilidade e transparência, sempre
                        buscando atender às necessidades específicas de cada cliente e
                        garantindo sua satisfação total.
                    </p>
                </div>
            </aside>
            <aside className="wrapper-boxes">
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
                    <strong>Valores</strong>
                    <br />
                    <span>
                        Ética, transparência, pro atividade, competência, agilidade,
                        comprometimento e inovação, são os valores que mostram como
                        desenvolvemos o nosso trabalho.
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
            </aside>
        </div>
    );
}

export default AboutUs;
