import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      console.log(action);
      state.category = action.payload;
    },
  },
});

export default newsSlice.reducer;
export const { setNews } = newsSlice.actions;
