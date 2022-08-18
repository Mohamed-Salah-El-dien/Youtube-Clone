import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './toggleSlice';

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
  },
});

export default store;
