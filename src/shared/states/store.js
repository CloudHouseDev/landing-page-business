import { configureStore } from "@reduxjs/toolkit";

import useShowModalMenu from "../../hooks/useShowingModalMenu";

const store = configureStore({
    reducer: {
        isOpen: useShowModalMenu,
    },
});

export default store;
