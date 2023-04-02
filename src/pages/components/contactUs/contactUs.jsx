/* eslint-disable consistent-return */
/* eslint-disable default-case */
import React, { useReducer } from "react";

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
    const [event, updateEvent] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "setName": {
                    return {
                        ...state,
                        name: action.name,
                    };
                }
                case "setEmail": {
                    return {
                        ...state,
                        email: action.email,
                    };
                }
                case "setSubject": {
                    return {
                        ...state,
                        subject: action.subject,
                    };
                }
                case "setPhone": {
                    return {
                        ...state,
                        phone: action.phone,
                    };
                }
                case "setMessage": {
                    return {
                        ...state,
                        message: action.message,
                    };
                }
            }
        },
        { name: "", email: "", subject: "", phone: "", message: "", errors: [{}] }
    );

    return (
        <div className="wrapper-contact-us-section">
            <SectionTitle text="Contato" />
            <div className="content-wrapper-asides">
                <form className="contact-infos">
                    <div className="wrapper-inputs input-required">
                        <div>
                            <label htmlFor="nameInput">Nome</label>
                            <input
                                value={event.name}
                                onChange={({ target: { value } }) => {
                                    updateEvent({ type: "setName", name: value });
                                }}
                                type="text"
                                placeholder="Ex.: Maria Antonia da Silva"
                                id="nameInput"
                            />
                        </div>
                        <div>
                            <label htmlFor="emailInput">E-mail</label>
                            <input
                                value={event.email}
                                onChange={({ target: { value } }) => {
                                    updateEvent({ type: "setEmail", email: value });
                                }}
                                type="email"
                                placeholder="Ex.: seuemail@gmail.com"
                                id="emailInput"
                            />
                        </div>
                    </div>
                    <div className="wrapper-inputs">
                        <div className="input-required">
                            <label htmlFor="subjectInput">Assunto</label>
                            <input
                                value={event.subject}
                                onChange={({ target: { value } }) => {
                                    updateEvent({ type: "setSubject", subject: value });
                                }}
                                type="text"
                                placeholder="Ex.: Site Corporativo"
                                id="subjectInput"
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumberInput">Celular</label>
                            <input
                                value={event.phone}
                                onChange={({ target: { value } }) => {
                                    updateEvent({ type: "setPhone", phone: value });
                                }}
                                type="text"
                                placeholder="Ex.: (51) 99854-88190"
                                id="phoneNumberInput"
                            />
                        </div>
                    </div>
                    <div className="wrapper-inputs input-required">
                        <div>
                            <label htmlFor="messageInput">Mensagem</label>
                            <textarea
                                value={event.message}
                                onChange={({ target: { value } }) => {
                                    updateEvent({ type: "setMessage", message: value });
                                }}
                                id="messageInput"
                                placeholder="Digite sua mensagem aqui"
                            />
                        </div>
                    </div>
                    <div className="wrapper-inputs">
                        <div>
                            <button type="button" className="button-submit">
                                Enviar <CaretRightOutlined />
                            </button>
                        </div>
                    </div>
                </form>
                <aside className="personal-infos">
                    <>
                        <div className="personal-info-details">
                            <EnvironmentOutlined />
                            <span>
                                Rua Senador Salgado Filho, 548 - Bela Vista, São Jerônimo
                                - RS, 96700-000
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
                        <div className="wrapper-clickable-links">
                            <a
                                className="clickable-links"
                                href="https://wa.me/5551995408445"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <WhatsAppOutlined
                                    style={{
                                        color: "white",
                                        background: "#25d366",
                                        borderRadius: "100%",
                                    }}
                                />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                className="clickable-links"
                                href="mailto:cloudhousegls@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <MailOutlined className="email-icon-style" />
                                <span>E-mail</span>
                            </a>
                        </div>
                    </>
                </aside>
            </div>
        </div>
    );
}

export default ContactUs;
