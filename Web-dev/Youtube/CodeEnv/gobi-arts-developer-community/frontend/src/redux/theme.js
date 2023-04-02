import { createSlice } from '@reduxjs/toolkit';
import { themeAction } from './themeServices';
const theme = JSON.parse(localStorage.getItem('theme'));
export const themeSlice = createSlice({
    name: 'theme',
    initialState: theme ? theme : 'dark',
    reducers: {
        toggleTheme: (state) => {
            localStorage.setItem(
                'theme',
                JSON.stringify(themeAction.toggleTheme(state))
            );
            return themeAction.toggleTheme(state);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
