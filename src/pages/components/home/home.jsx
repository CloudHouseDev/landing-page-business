import React from "react";
import Lottie from "lottie-react";
import cloudHouseAnimation from "../../../assets/animations/cloudHouse.json";

import "./styles.css";

function Home() {
    return (
        <div className="wrapper-home-section">
            <div className="wrapper-text">
                <h1>Bem-vindo à Cloud House - Sua Solução Digital Inovadora!</h1>
                <br />
                <p>
                Na <span> Cloud House </span>, nós transformamos ideias em realidade digital. 
                Somos uma Software House apaixonada por inovação, dedicada a oferecer soluções tecnológicas de ponta para impulsionar o sucesso do seu negócio.
                </p>
            </div>

            <div className="align-items-animation">
                <Lottie animationData={cloudHouseAnimation} loop />;
            </div>
        </div>
    );
}

export default Home;
