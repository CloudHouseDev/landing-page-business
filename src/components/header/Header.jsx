import classNames from "classnames";
import React, { useState } from "react";

import CloudHouseIT from "../../assets/images/cloud_house_logo_transparent_dark.png";

import "./styles.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <img src={CloudHouseIT} alt="Cloud House It logo" />
            <ul className="wrapper-nav">
                <li className="nav">Home</li>
                <li className="nav">Sobre Nós</li>
                <li className="nav">Produtos e Serviços</li>
                <li className="nav">Contato</li>
            </ul>
            <button
                className={classNames("container", {
                    change: isOpen,
                })}
                type="button"
                onClick={() => setIsOpen((currentState) => !currentState)}
            >
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
            </button>
        </header>
    );
}

export default Header;
