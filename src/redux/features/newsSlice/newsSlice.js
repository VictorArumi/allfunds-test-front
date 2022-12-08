const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    loadNews: (news, action) => [...action.payload],
    deleteNew: (news, action) =>
      news.filter((_new) => _new.id !== action.payload),
    createNew: (news, action) => [...news, action.payload],
  },
});

export const {
  loadNews: loadNewsActionCreator,
  deleteNew: deleteNewActionCreator,
  createNew: createNewActionCreator,
} = newsSlice.actions;

export default newsSlice.reducer;
