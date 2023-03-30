import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.css";

function SectionTitle({ text, className }) {
    return (
        <div className={classNames("section-title", className)}>
            <div className="wrapper-section-title-items">
                <h2>{text}</h2>
                <div />
            </div>
        </div>
    );
}

export default SectionTitle;

SectionTitle.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

SectionTitle.defaultProps = {
    className: "",
};
