import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/newsSlice/newsSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
