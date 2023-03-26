import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function Container({ children }) {
    return <div className="wrapper-container">{children}</div>;
}

export default Container;

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
};
