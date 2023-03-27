import React from "react";
import { useSelector } from "react-redux";

import DefaultPage from "./pages/Default";
import ModalMenu from "./components/modalMenu/modalMenu";

import "./styles/global.css";

function App() {
    const isOpen = useSelector((state) => state.isOpen.value);

    return isOpen ? <ModalMenu /> : <DefaultPage />;
}

export default App;
