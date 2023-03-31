import React from "react";

import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    WhatsAppOutlined,
} from "@ant-design/icons";

import SectionTitle from "../../../components/sectionTitle/sectionTitle";

import "./styles.css";

function ContactUs() {
    return (
        <section className="wrapper-contact-us-section">
            <SectionTitle text="Contato" />
            <div className="content-wrapper-asides">
                <aside>form</aside>
                <aside className="personal-infos">
                    <div className="personal-info-details">
                        <EnvironmentOutlined />
                        <span>
                            Rua Senador Salgado Filho, 548 - Bela Vista, São Jerônimo -
                            RS, 96700-000
                        </span>
                    </div>
                    <div className="personal-info-details">
                        <PhoneOutlined />
                        <span>(51) 995408445</span>
                    </div>
                    <div className="personal-info-details">
                        <MailOutlined />
                        <span>cloudhousegls@gmail.com</span>
                    </div>
                    {/* <div className="wrapper-clickable-links">
                        <div className="clickable-links">
                            <div>
                                <WhatsAppOutlined />
                            </div>
                            <span>WhatsApp</span>
                        </div>
                        <div className="clickable-links">
                            <div>
                                <MailOutlined />
                            </div>
                            <span>E-mail</span>
                        </div>
                    </div> */}
                </aside>
            </div>
        </section>
    );
}

export default ContactUs;
