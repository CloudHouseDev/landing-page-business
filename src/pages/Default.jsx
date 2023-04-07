import React from "react";

import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import AboutUs from "./components/aboutUs/aboutUs";
import ServicesOffer from "./components/ServicesOffer/ServicesOffer";
import ContactUs from "./components/contactUs/contactUs";
import Home from "./components/home/home";

import "../styles/default-page.css";

function DefaultPage() {
    return (
        <>
            <Header />
            <Container className="background-black" sectionId="section-home">
                <Home />
            </Container>
            <Container className="background-white" sectionId="section-about-us">
                <AboutUs />
            </Container>
            <Container sectionId="section-services">
                <ServicesOffer />
            </Container>
            <Container className="background-white" sectionId="section-contact">
                <ContactUs />
            </Container>
            <Container className="background-black">
                <Footer />
            </Container>
        </>
    );
}

export default DefaultPage;
