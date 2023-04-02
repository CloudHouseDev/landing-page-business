import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.css";

function Container({ children, className, sectionId }) {
    return (
        <section className={classNames("wrapper-container", className)} id={sectionId}>
            <div className="wrapper-limit">{children}</div>
        </section>
    );
}

export default Container;

Container.propTypes = {
    sectionId: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
};

Container.defaultProps = {
    className: "",
    sectionId: "",
};
