import React from "react";

import "./styles.css";

function Footer() {
    return (
        <footer className="footer">
            <span>Todos os direitos reservados</span>
            <strong>
                Cloud House IT,
                <a
                    href="https://www.linkedin.com/in/gabriel-leite-676253189/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @CloudHouseDev
                </a>
            </strong>
        </footer>
    );
}

export default Footer;
