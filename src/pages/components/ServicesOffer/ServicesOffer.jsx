import React from "react";
import PropTypes from "prop-types";
import {
    WechatFilled,
    ApartmentOutlined,
    AndroidOutlined,
    CloudServerOutlined,
    BarChartOutlined,
    LaptopOutlined,
    Html5Outlined,
} from "@ant-design/icons";

import SectionTitle from "../../../components/sectionTitle/sectionTitle";

import "./styles.css";

function ServicesOffer({ sectionId }) {
    return (
        <section className="wrapper-services-offer-section" id={sectionId}>
            <SectionTitle text="Produtos e Serviços" />
            <div className="content-services-offer">
                <div className="box-service-offers">
                    <div className="wrapper-icon">
                        <WechatFilled />
                    </div>
                    <h4>Consultoria de TI</h4>
                </div>
                <div className="box-service-offers">
                    <div className="wrapper-icon">
                        <LaptopOutlined />
                    </div>
                    <h4>Software & Licenciamento</h4>
                </div>
                <div className="box-service-offers">
                    <div className="wrapper-icon">
                        <CloudServerOutlined />
                    </div>
                    <h4>Gerenciamento em Nuvem & Hospedagem</h4>
                </div>
                <div className="box-service-offers">
                    <div className="wrapper-icon">
                        <Html5Outlined />
                    </div>
                    <h4>Sites e Plataformas Web</h4>
                </div>
                <div className="box-service-offers">
                    <div className="wrapper-icon">
                        <AndroidOutlined />
                    </div>
                    <h4>Aplicativos Personalizados</h4>
                </div>
                <div className="box-service-offers">
                    <div className="wrapper-icon">
                        <ApartmentOutlined />
                    </div>
                    <h4>Desenvolvimento de Microsserviços & Monólitos</h4>
                </div>
                <div className="box-service-offers">
                    <div className="wrapper-icon">
                        <BarChartOutlined />
                    </div>
                    <h4>Análise de Sistemas e Testes Automatizados</h4>
                </div>
            </div>
        </section>
    );
}

export default ServicesOffer;

ServicesOffer.propTypes = {
    sectionId: PropTypes.string.isRequired,
};
