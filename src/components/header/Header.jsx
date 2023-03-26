import React from "react";

import CloudHouseIT from "../../assets/images/cloud_house_logo_transparent_dark.png";

import "./styles.css";

function Header() {
    return (
        <header className="header">
            <img src={CloudHouseIT} alt="Cloud House It logo" />
            <ul>
                <li>Home</li>
                <li>Sobre Nós</li>
                <li>Produtos e Serviços</li>
                <li>Contato</li>
            </ul>
        </header>
    );
}

export default Header;
