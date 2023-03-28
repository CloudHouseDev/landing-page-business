import React from "react";

import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import AboutUs from "./components/aboutUs/aboutUs";

import "../styles/default-page.css";

function DefaultPage() {
    return (
        <>
            <Container className="background-black">
                <Header />
            </Container>
            <Container className="background-white">
                <AboutUs />
            </Container>
            <Container className="background-black">
                <Footer />
            </Container>
        </>
    );
}

export default DefaultPage;
