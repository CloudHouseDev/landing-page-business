import React from "react";
import PropTypes from "prop-types";
import { CaretUpOutlined } from "@ant-design/icons";

import "./styles.css";

function Footer({ shouldShowHomeSectionLink }) {
    return (
        <footer className="footer">
            <div>
                <span>Copyright © 2023. Todos os direitos reservados.</span>
                <strong className="footer-details">Cloud House IT</strong>
            </div>
            {shouldShowHomeSectionLink ? (
                <a href="#section-home" className="back-nav-link">
                    <CaretUpOutlined />
                </a>
            ) : (
                <></>
            )}
        </footer>
    );
}

export default Footer;

Footer.propTypes = {
    shouldShowHomeSectionLink: PropTypes.bool,
};

Footer.defaultProps = {
    shouldShowHomeSectionLink: true,
};
