import { createSlice } from "@reduxjs/toolkit";

export const showModalMenu = createSlice({
    name: "isOpen",
    initialState: {
        value: false,
    },
    reducers: {
        changeValue: (state) => {
            state.value = !state.value;
        },
    },
});

export const { changeValue } = showModalMenu.actions;

export default showModalMenu.reducer;
