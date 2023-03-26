import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.css";

function Container({ children, className }) {
    return (
        <div className={classNames("wrapper-container", className)}>
            <div className="wrapper-limit">{children}</div>
        </div>
    );
}

export default Container;

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
};

Container.defaultProps = {
    className: "",
};
