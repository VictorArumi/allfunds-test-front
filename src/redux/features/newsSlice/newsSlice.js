const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    loadNews: (news, action) => [...action.payload],
  },
});

export const { loadNews: loadNewsActionCreator } = newsSlice.actions;

export default newsSlice.reducer;
