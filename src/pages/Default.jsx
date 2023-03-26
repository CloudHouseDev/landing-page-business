import React from "react";

import Container from "../components/container/Container";
import Header from "../components/header/Header";

import "../styles/default-page.css";

function DefaultPage() {
    return (
        <Container className="background-black">
            <Header />
        </Container>
    );
}

export default DefaultPage;
