import React from "react";

import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    WhatsAppOutlined,
    CaretRightOutlined,
} from "@ant-design/icons";

import SectionTitle from "../../../components/sectionTitle/sectionTitle";

import "./styles.css";

function ContactUs() {
    return (
        <section className="wrapper-contact-us-section">
            <SectionTitle text="Contato" />
            <div className="content-wrapper-asides">
                <form className="contact-infos">
                    <div className="wrapper-inputs">
                        <div>
                            <label htmlFor="nameInput">Nome</label>
                            <input
                                type="text"
                                placeholder="Ex.: Maria Antonia da Silva"
                                id="nameInput"
                            />
                        </div>
                        <div>
                            <label htmlFor="emailInput">E-mail</label>
                            <input
                                type="email"
                                placeholder="Ex.: seuemail@gmail.com"
                                id="emailInput"
                            />
                        </div>
                    </div>
                    <div className="wrapper-inputs">
                        <div>
                            <label htmlFor="subjectInput">Assunto</label>
                            <input
                                type="text"
                                placeholder="Ex.: Site Corporativo"
                                id="subjectInput"
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumberInput">Celular</label>
                            <input
                                type="text"
                                placeholder="Ex.: (51) 99854-88190"
                                id="phoneNumberInput"
                            />
                        </div>
                    </div>
                    <div className="wrapper-inputs">
                        <div>
                            <label htmlFor="messageInput">Mensagem</label>
                            <textarea
                                id="messageInput"
                                placeholder="Digite sua mensagem aqui"
                            />
                        </div>
                    </div>
                    <button type="button" className="button-submit">
                        Enviar <CaretRightOutlined />
                    </button>
                </form>
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
                    {/*   <div className="wrapper-clickable-links">
                        <a className="clickable-links" href="opa">
                            <div>
                                <WhatsAppOutlined />
                            </div>
                            <span>WhatsApp</span>
                        </a>
                        <a className="clickable-links" href="opa">
                            <div>
                                <MailOutlined />
                            </div>
                            <span>E-mail</span>
                        </a>
                    </div> */}
                </aside>
            </div>
        </section>
    );
}

export default ContactUs;
