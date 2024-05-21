import React from "react";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line import/no-extraneous-dependencies
import AdSense from "react-adsense";
import DefaultPage from "./pages/Default";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

function App() {
    return (
        <>
            <AdSense.Google client="ca-pub-9712344081378233" slot="7806394673" />
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
