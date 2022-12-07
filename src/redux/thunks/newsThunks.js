import axios from "axios";
import { loadNewsActionCreator } from "../features/newsSlice/newsSlice";

export const loadNewsThunk = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news`;

  const {
    data: { news },
  } = await axios.get(url);

  dispatch(loadNewsActionCreator(news));
};

export const loadArchivedNewsThunk = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news/archived`;

  const {
    data: { archivedNews },
  } = await axios.get(url);

  dispatch(loadNewsActionCreator(archivedNews));
};
