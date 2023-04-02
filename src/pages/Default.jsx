import React from "react";

import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import AboutUs from "./components/aboutUs/aboutUs";
import ServicesOffer from "./components/ServicesOffer/ServicesOffer";
import ContactUs from "./components/contactUs/contactUs";

import "../styles/default-page.css";

function DefaultPage() {
    return (
        <>
            <Container className="background-black header-container">
                <Header />
            </Container>
            <Container className="background-white">
                <AboutUs sectionId="section-about-us" />
            </Container>
            <Container>
                <ServicesOffer sectionId="section-services" />
            </Container>
            <Container className="background-white">
                <ContactUs sectionId="section-contact" />
            </Container>
            <Container className="background-black">
                <Footer />
            </Container>
        </>
    );
}

export default DefaultPage;
