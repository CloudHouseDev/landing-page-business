import React from "react";
import { useDispatch } from "react-redux";

import Footer from "../footer/footer";
import { changeValue } from "../../hooks/useShowingModalMenu";

import CloudHouseIT from "../../assets/images/cloud_house_logo_transparent_white.png";

import "./styles.css";

function ModalMenu() {
    const dispatch = useDispatch();

    return (
        <div className="modal-menu-container">
            <div className="modal-menu-container-limit">
                <header className="header-modal-menu">
                    <img src={CloudHouseIT} alt="Cloud House It logo" />
                    <button
                        type="button"
                        className="container-modal-menu change-modal-menu"
                        onClick={() => dispatch(changeValue())}
                    >
                        <div className="nav-top-modal-menu" />
                        <div className="nav-center-modal-menu" />
                        <div className="nav-bottom-modal-menu" />
                    </button>
                </header>
                <div className="wrapper-naves-modal-menu">
                    <a
                        className="nav-modal-menu"
                        href="#section-home"
                        onClick={() => dispatch(changeValue())}
                    >
                        Home
                    </a>
                    <a
                        className="nav-modal-menu"
                        href="#section-about-us"
                        onClick={() => dispatch(changeValue())}
                    >
                        Sobre Nós
                    </a>
                    <a
                        className="nav-modal-menu"
                        href="#section-services"
                        onClick={() => dispatch(changeValue())}
                    >
                        Produtos e Serviços
                    </a>
                    <a
                        className="nav-modal-menu"
                        href="#section-contact"
                        onClick={() => dispatch(changeValue())}
                    >
                        Contato
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ModalMenu;
