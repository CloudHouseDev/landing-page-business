/* eslint-disable consistent-return */
/* eslint-disable default-case */
import React, { useMemo, useReducer } from "react";
import { AsYouType, isValidPhoneNumber, parseNumber } from "libphonenumber-js";
import emailjs from "@emailjs/browser";
import classNames from "classnames";

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
    const validationSchema = {
        isNameInvalid: /[0-9!@#$%^&*()_+{}\[\]:;<>,.?/~`|-]/,
        isEmailInvalid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        hasInputSpecialChars: /[^a-zA-Z0-9 ]/,
        hasInputLetter: /[a-zA-Z]/,
    };

    function phoneFormatter(phone) {
        if (!phone) return "";

        const formattedPhone = new AsYouType("BR").input(phone);

        return formattedPhone;
    }

    const [value, updateValue] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "setName": {
                    if (!action.name) {
                        return {
                            ...state,
                            name: action.name,
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "nameInput"
                                ),
                                {
                                    fieldId: "nameInput",
                                    message: "Preencha o campo Nome.",
                                },
                            ],
                        };
                    }

                    if (validationSchema.isNameInvalid.test(action.name)) {
                        return {
                            ...state,
                            name: action.name,
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "nameInput"
                                ),
                                { fieldId: "nameInput", message: "Nome não é válido." },
                            ],
                        };
                    }
                    return {
                        ...state,
                        errors: [
                            ...state.errors.filter(
                                (error) => error?.fieldId !== "nameInput"
                            ),
                        ],
                        name: action.name,
                    };
                }
                case "setEmail": {
                    if (!action.email) {
                        return {
                            ...state,
                            email: action.email,
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "emailInput"
                                ),
                                {
                                    fieldId: "emailInput",
                                    message: "Preencha o campo E-mail.",
                                },
                            ],
                        };
                    }
                    if (!validationSchema.isEmailInvalid.test(action.email)) {
                        return {
                            ...state,
                            email: action.email,
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "emailInput"
                                ),
                                {
                                    fieldId: "emailInput",
                                    message: "E-mail informado não é válido.",
                                },
                            ],
                        };
                    }
                    return {
                        ...state,
                        errors: [
                            ...state.errors.filter(
                                (error) => error?.fieldId !== "emailInput"
                            ),
                        ],
                        email: action.email,
                    };
                }
                case "setSubject": {
                    if (!action.subject) {
                        return {
                            ...state,
                            subject: action.subject,
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "subjectInput"
                                ),
                                {
                                    fieldId: "subjectInput",
                                    message: "Preencha o campo Assunto.",
                                },
                            ],
                        };
                    }
                    if (validationSchema.hasInputSpecialChars.test(action.subject)) {
                        return {
                            ...state,
                            subject: action.subject,
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "subjectInput"
                                ),
                                {
                                    fieldId: "subjectInput",
                                    message: "Assunto informado não é válido.",
                                },
                            ],
                        };
                    }
                    return {
                        ...state,
                        errors: [
                            ...state.errors.filter(
                                (error) => error?.fieldId !== "subjectInput"
                            ),
                        ],
                        subject: action.subject,
                    };
                }
                case "setPhone": {
                    if (validationSchema.hasInputLetter.test(action.phone)) {
                        return { ...state };
                    }

                    if (!!action.phone && action.phone.length < 15) {
                        return {
                            ...state,
                            phone: phoneFormatter(action.phone),
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "phoneInput"
                                ),
                                {
                                    fieldId: "phoneInput",
                                    message: "Número informado não é válido.",
                                },
                            ],
                        };
                    }

                    if (!!action.phone && !isValidPhoneNumber(action.phone, "BR")) {
                        return {
                            ...state,
                            phone: phoneFormatter(action.phone),
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "phoneInput"
                                ),
                                {
                                    fieldId: "phoneInput",
                                    message: "Número informado não é válido.",
                                },
                            ],
                        };
                    }
                    return {
                        ...state,
                        phone: phoneFormatter(action.phone),
                        errors: [
                            ...state.errors.filter(
                                (error) => error?.fieldId !== "phoneInput"
                            ),
                        ],
                    };
                }
                case "setMessage": {
                    if (!action.message) {
                        return {
                            ...state,
                            message: action.message,
                            errors: [
                                ...state.errors.filter(
                                    (error) => error?.fieldId !== "messageInput"
                                ),
                                {
                                    fieldId: "messageInput",
                                    message: "Preencha o campo Mensagem.",
                                },
                            ],
                        };
                    }
                    return {
                        ...state,
                        message: action.message,
                    };
                }
                case "setError": {
                    return {
                        ...state,
                        errors: [...state.errors, action.error],
                    };
                }
            }
        },
        { name: "", email: "", subject: "", phone: "", message: "", errors: [] }
    );

    const messageErrorFromPhoneInput = useMemo(
        () => value.errors?.find((error) => error?.fieldId === "phoneInput")?.message,
        [value]
    );

    const messageErrorFromEmailInput = useMemo(
        () => value.errors?.find((error) => error?.fieldId === "emailInput")?.message,
        [value]
    );

    const messageErrorFromNameInput = useMemo(
        () => value.errors?.find((error) => error?.fieldId === "nameInput")?.message,
        [value]
    );

    const messageErrorFromSubjectInput = useMemo(
        () => value.errors?.find((error) => error?.fieldId === "subjectInput")?.message,
        [value]
    );

    const messageErrorFromMessageInput = useMemo(
        () => value.errors?.find((error) => error?.fieldId === "messageInput")?.message,
        [value]
    );

    function cleanUpInputs() {
        updateValue({ type: "setName", name: "" });
        updateValue({ type: "setPhone", phone: "" });
        updateValue({ type: "setEmail", email: "" });
        updateValue({ type: "setSubject", subject: "" });
        updateValue({ type: "setMessage", message: "" });
    }

    async function sendEmail(event) {
        event.preventDefault();

        const areThereErrors = value.errors.find(
            (element) => Object.values(element).length > 0
        );

        if (!!areThereErrors && Object.values(areThereErrors).length > 0) {
            return;
        }

        if (
            value.name.length <= 0 ||
            value.email.length <= 0 ||
            value.subject.length <= 0 ||
            value.message.length <= 0
        ) {
            if (value.name.length <= 0) {
                updateValue({
                    type: "setError",
                    error: { fieldId: "nameInput", message: "Preencha o campo Nome." },
                });
            }
            if (value.email.length <= 0) {
                updateValue({
                    type: "setError",
                    error: {
                        fieldId: "emailInput",
                        message: "Preencha o campo E-mail.",
                    },
                });
            }
            if (value.subject.length <= 0) {
                updateValue({
                    type: "setError",
                    error: {
                        fieldId: "subjectInput",
                        message: "Preencha o campo Assunto.",
                    },
                });
            }
            if (value.message.length <= 0) {
                updateValue({
                    type: "setError",
                    error: {
                        fieldId: "messageInput",
                        message: "Preencha o campo Mensagem.",
                    },
                });
            }
            return;
        }

        const response = await emailjs.send(
            "service_po35nhq",
            "template_qkl21yl",
            {
                from_subject: value.subject,
                from_name: value.name,
                from_message: value.message,
                from_phone: value.phone,
                from_email: value.email,
                reply_to: value.email,
            },
            "e10Y-nn5CZVKAP0d9"
        );

        if (response.status === 200) {
            cleanUpInputs();
        } else {
            console.log("ERROUU", response);
        }
    }

    return (
        <div className="wrapper-contact-us-section">
            <SectionTitle text="Contato" />
            <div className="content-wrapper-asides">
                <form className="contact-infos" onSubmit={sendEmail} autoComplete="off">
                    <div className="wrapper-inputs input-required wrapper-input-common">
                        <div className="wrapper-content-inputs">
                            <label htmlFor="nameInput">Nome</label>
                            <input
                                autoComplete="none"
                                className={classNames({
                                    "wrapper-input-error": value.errors?.find(
                                        (error) => error?.fieldId === "nameInput"
                                    ),
                                })}
                                value={value.name}
                                onChange={({ target: { value } }) => {
                                    updateValue({ type: "setName", name: value });
                                }}
                                type="text"
                                placeholder="Ex.: Maria Antonia da Silva"
                                id="nameInput"
                            />
                            {messageErrorFromNameInput ? (
                                <>
                                    <div className="arrow-up" />
                                    <div className="message-error">
                                        <span>{messageErrorFromNameInput}</span>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="wrapper-content-inputs">
                            <label htmlFor="emailInput">E-mail</label>
                            <input
                                autoComplete="none"
                                className={classNames({
                                    "wrapper-input-error": value.errors?.find(
                                        (error) => error?.fieldId === "emailInput"
                                    ),
                                })}
                                value={value.email}
                                onChange={({ target: { value } }) => {
                                    updateValue({ type: "setEmail", email: value });
                                }}
                                type="text"
                                placeholder="Ex.: seuemail@gmail.com"
                                id="emailInput"
                            />
                            {messageErrorFromEmailInput ? (
                                <>
                                    <div className="arrow-up" />
                                    <div className="message-error">
                                        <span>{messageErrorFromEmailInput}</span>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="wrapper-inputs wrapper-input-common">
                        <div className="input-required wrapper-content-inputs">
                            <label htmlFor="subjectInput">Assunto</label>
                            <input
                                autoComplete="none"
                                value={value.subject}
                                className={classNames({
                                    "wrapper-input-error": value.errors?.find(
                                        (error) => error?.fieldId === "subjectInput"
                                    ),
                                })}
                                onChange={({ target: { value } }) => {
                                    updateValue({ type: "setSubject", subject: value });
                                }}
                                type="text"
                                placeholder="Ex.: Site Corporativo"
                                id="subjectInput"
                            />
                            {messageErrorFromSubjectInput ? (
                                <>
                                    <div className="arrow-up" />
                                    <div className="message-error">
                                        <span>{messageErrorFromSubjectInput}</span>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="wrapper-content-inputs">
                            <label htmlFor="phoneNumberInput">Celular</label>
                            <input
                                autoComplete="none"
                                value={value.phone}
                                maxLength={15}
                                className={classNames({
                                    "wrapper-input-error": value.errors?.find(
                                        (error) => error?.fieldId === "phoneInput"
                                    ),
                                })}
                                onChange={({ target: { value } }) => {
                                    updateValue({
                                        type: "setPhone",
                                        phone: phoneFormatter(value),
                                    });
                                }}
                                type="text"
                                placeholder="Ex.: (51) 98654-7460"
                                id="phoneNumberInput"
                            />

                            {messageErrorFromPhoneInput ? (
                                <>
                                    <div className="arrow-up" />
                                    <div className="message-error">
                                        <span>{messageErrorFromSubjectInput}</span>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="wrapper-inputs input-required wrapper-textarea-common">
                        <div className="wrapper-content-inputs">
                            <label htmlFor="messageInput">Mensagem</label>
                            <textarea
                                autoComplete="none"
                                value={value.message}
                                className={classNames({
                                    "wrapper-textarea-error": value.errors?.find(
                                        (error) => error?.fieldId === "messageInput"
                                    ),
                                })}
                                onChange={({ target: { value } }) => {
                                    updateValue({ type: "setMessage", message: value });
                                }}
                                id="messageInput"
                                placeholder="Digite sua mensagem aqui"
                            />
                            {messageErrorFromMessageInput ? (
                                <>
                                    <div className="arrow-up" />
                                    <div className="message-error">
                                        <span>{messageErrorFromMessageInput}</span>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="wrapper-inputs">
                        <div className="wrapper-content-inputs">
                            <button type="submit" className="button-submit">
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
