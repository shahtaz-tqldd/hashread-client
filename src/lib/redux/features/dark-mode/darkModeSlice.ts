import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DarkModeState {
  isDarkMode: boolean;
}

const loadDarkModeFromStorage = (): boolean => {
  const storedValue = localStorage.getItem('darkMode');
  return storedValue ? JSON.parse(storedValue) : false;
};

const initialState: DarkModeState = {
  isDarkMode: loadDarkModeFromStorage(),
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('darkMode', JSON.stringify(state.isDarkMode));
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      localStorage.setItem('darkMode', JSON.stringify(action.payload));
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;
