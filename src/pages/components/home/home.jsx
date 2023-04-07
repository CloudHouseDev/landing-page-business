import React from "react";
import Lottie from "lottie-react";
import cloudHouseAnimation from "../../../assets/animations/cloudHouse.json";

import "./styles.css";

function Home() {
    return (
        <div className="wrapper-home-section">
            <div className="wrapper-text">
                <p>
                    A <span>Cloud House It</span>, é uma empresa de tecnologia fundada em
                    2023 com o propósito de alcançar a excelência em seu segmento através
                    da oferta de tecnologias avançadas e serviços especializados. Com uma
                    equipe altamente capacitada e dedicada, a empresa está comprometida em
                    oferecer soluções inovadoras e personalizadas para cada cliente.
                </p>
            </div>

            <div className="align-items-animation">
                <Lottie animationData={cloudHouseAnimation} loop />;
            </div>
        </div>
    );
}

export default Home;