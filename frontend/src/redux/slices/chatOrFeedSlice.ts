import { createSlice } from "@reduxjs/toolkit";

interface toggleChatOrFeed {
  feedVisible: boolean;
}

const initialState: toggleChatOrFeed = {
  feedVisible: true,
};

const toggleChatOrFeedSlice = createSlice({
  name: "toggleChatOrFeed",
  initialState,
  reducers: {
    toggleChatOrFeed(state) {
      state.feedVisible = !state.feedVisible;
    },
  },
});

export const { toggleChatOrFeed } = toggleChatOrFeedSlice.actions;
export default toggleChatOrFeedSlice.reducer;
