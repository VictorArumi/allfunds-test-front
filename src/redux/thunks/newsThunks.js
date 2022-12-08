import axios from "axios";
import {
  createNewActionCreator,
  deleteNewActionCreator,
  loadNewsActionCreator,
} from "../features/newsSlice/newsSlice";

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

export const archiveNewThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news/edit/${id}`;

  await axios.put(url);

  dispatch(deleteNewActionCreator(id));
};

export const deleteNewThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news/archived/${id}`;

  await axios.delete(url);

  dispatch(deleteNewActionCreator(id));
};

export const createNewThunk = (submittedNewData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news/create`;

  const {
    data: { createdNew },
  } = await axios.post(url, submittedNewData);

  dispatch(createNewActionCreator(createdNew));
};
