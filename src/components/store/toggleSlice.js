import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { active: false },
  reducers: {
    toggleActive(state) {
      state.active = !state.active;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
