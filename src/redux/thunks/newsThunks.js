import axios from "axios";
import {
  createNewActionCreator,
  deleteNewActionCreator,
  loadNewsActionCreator,
} from "../features/newsSlice/newsSlice";

export const loadNewsThunk = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news`;

  try {
    const {
      data: { news },
    } = await axios.get(url);

    dispatch(loadNewsActionCreator(news));
  } catch {}
};

export const loadArchivedNewsThunk = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news/archived`;
  try {
    const {
      data: { archivedNews },
    } = await axios.get(url);

    dispatch(loadNewsActionCreator(archivedNews));
  } catch {}
};

export const archiveNewThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news/edit/${id}`;
  try {
    await axios.put(url);

    dispatch(deleteNewActionCreator(id));
  } catch {}
};

export const deleteNewThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news/archived/${id}`;
  try {
    await axios.delete(url);

    dispatch(deleteNewActionCreator(id));
  } catch {}
};

export const createNewThunk = (submittedNewData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}news/create`;

  try {
    const {
      data: { createdNew },
    } = await axios.post(url, submittedNewData);
    dispatch(createNewActionCreator(createdNew));
  } catch {}
};
