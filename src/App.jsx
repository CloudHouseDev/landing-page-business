import React from "react";
import { ToastContainer } from "react-toastify";

import DefaultPage from "./pages/Default";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

function App() {
    return (
        <>
            <DefaultPage />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export default App;
