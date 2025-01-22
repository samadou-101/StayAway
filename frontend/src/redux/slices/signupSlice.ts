import { SignalCellularAltOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

interface signupState {
  passwordVisible: boolean;
}

const initialState: signupState = {
  passwordVisible: false,
};
const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    togglePasswordVisibility(state) {
      state.passwordVisible = !state.passwordVisible;
    },
  },
});

export const { togglePasswordVisibility } = signupSlice.actions;
export default signupSlice.reducer;
