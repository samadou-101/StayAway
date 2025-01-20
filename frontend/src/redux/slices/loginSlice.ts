import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  passwordVisible: boolean;
}

const initialState: loginState = {
  passwordVisible: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    togglePasswordVisibility(state) {
      state.passwordVisible = !state.passwordVisible;
    },
  },
});

export const { togglePasswordVisibility } = loginSlice.actions;
export default loginSlice.reducer;
