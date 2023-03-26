import React from "react";
import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";
import CloudHouseIT from "../../assets/images/cloud_house_logo_transparent_dark.png";

import useWindowResize from "../../hooks/useWindowResize";
import { changeValue } from "../../hooks/useShowingModalMenu";

import "./styles.css";

function Header() {
    const { currentSize, defaultMediaQueries } = useWindowResize();
    const isOpen = useSelector((state) => state.isOpen.value);
    const dispatch = useDispatch();

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
                    onClick={() => dispatch(changeValue())}
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
