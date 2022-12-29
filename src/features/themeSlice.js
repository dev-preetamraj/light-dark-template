import { createSlice } from '@reduxjs/toolkit';

const localMode = localStorage.getItem('theme') !== null ? JSON.parse(localStorage.getItem('theme')) : 'dark';
const initialState = {
    mode: localMode
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: (state, {payload}) => {
            localStorage.setItem('theme', JSON.stringify(payload));
            state = payload;
        }
    }
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;