import React from "react";
import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";
import CloudHouseIT from "../../assets/images/cloud_house_logo_transparent_white.png";

import useWindowResize from "../../hooks/useWindowResize";
import { changeValue } from "../../hooks/useShowingModalMenu";

import ModalMenu from "../modalMenu/modalMenu";

import "./styles.css";

function Header() {
    const { currentSize, defaultMediaQueries } = useWindowResize();
    const isOpen = useSelector((state) => state.isOpen.value);
    const dispatch = useDispatch();

    return (
        <>
            <header className="header-container">
                <div className="header-limit">
                    <div className="wrapper-logo">
                        <img src={CloudHouseIT} alt="Cloud House It logo" />
                        <strong>
                            House <br /> Cloud IT
                        </strong>
                    </div>
                    {currentSize.width > defaultMediaQueries.LAPTOP_IN_PX ? (
                        <div className="wrapper-nav">
                            <a className="nav" href="#section-home">
                                Home
                            </a>
                            <a className="nav" href="#section-about-us">
                                Sobre Nós
                            </a>
                            <a className="nav" href="#section-services">
                                Produtos e Serviços
                            </a>
                            <a className="nav" href="#section-contact">
                                Contato
                            </a>
                        </div>
                    ) : (
                        <button
                            type="button"
                            className={classNames("container", {
                                change: isOpen,
                            })}
                            onClick={() => dispatch(changeValue())}
                        >
                            <div className="nav-top" />
                            <div className="nav-center" />
                            <div className="nav-bottom" />
                        </button>
                    )}
                </div>
            </header>
            {isOpen && <ModalMenu />}
        </>
    );
}

export default Header;
