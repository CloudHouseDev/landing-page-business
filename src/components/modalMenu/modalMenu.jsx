import React from "react";
import { useDispatch } from "react-redux";

import Container from "../container/Container";
import Footer from "../footer/footer";
import { changeValue } from "../../hooks/useShowingModalMenu";

import CloudHouseIT from "../../assets/images/cloud_house_logo_transparent_white.png";

import "./styles.css";

function ModalMenu() {
    const dispatch = useDispatch();

    return (
        <Container className="background-black header-container .wrapper-limit">
            <div className="modal-menu">
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
                <ul className="wrapper-naves-modal-menu">
                    <li
                        className="nav-modal-menu"
                        onClick={() => dispatch(changeValue())}
                    >
                        Home
                    </li>
                    <li
                        className="nav-modal-menu"
                        onClick={() => dispatch(changeValue())}
                    >
                        Sobre Nós
                    </li>
                    <li
                        className="nav-modal-menu"
                        onClick={() => dispatch(changeValue())}
                    >
                        Produtos e Serviços
                    </li>
                    <li
                        className="nav-modal-menu"
                        onClick={() => dispatch(changeValue())}
                    >
                        Contato
                    </li>
                </ul>
                <Footer />
            </div>
        </Container>
    );
}

export default ModalMenu;
