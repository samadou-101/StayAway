import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import signupReducer from "./slices/signupSlice";
import toggleChatOrFeedReducer from "./slices/chatOrFeedSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    toggleChatOrFeed: toggleChatOrFeedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
