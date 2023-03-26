import classNames from "classnames";
import React, { useState } from "react";

import CloudHouseIT from "../../assets/images/cloud_house_logo_transparent_dark.png";

import useWindowResize from "../../hooks/useWindowResize";

import "./styles.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { currentSize, defaultMediaQueries } = useWindowResize();

    return (
        <header className="header">
            <img src={CloudHouseIT} alt="Cloud House It logo" />

            {currentSize.width > defaultMediaQueries.LAPTOP_IN_PX ? (
                <ul className="wrapper-nav">
                    <li className="nav">Home</li>
                    <li className="nav">Sobre Nós</li>
                    <li className="nav">Produtos e Serviços</li>
                    <li className="nav">Contato</li>
                </ul>
            ) : (
                <button
                    type="button"
                    className={classNames("container", {
                        change: isOpen,
                    })}
                    onClick={() => setIsOpen((currentState) => !currentState)}
                >
                    <div className="nav-top" />
                    <div className="nav-center" />
                    <div className="nav-bottom" />
                </button>
            )}
        </header>
    );
}

export default Header;
