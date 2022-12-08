import axios from "axios";
import mockNews from "../../mocks/mockNews";
import {
  deleteNewActionCreator,
  loadNewsActionCreator,
} from "../features/newsSlice/newsSlice";
import {
  archiveNewThunk,
  deleteNewThunk,
  loadArchivedNewsThunk,
  loadNewsThunk,
  createNewThunk,
} from "./newsThunks";

const dispatch = jest.fn();

describe("Given a loadNewsThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with a loadNews action", async () => {
      const payload = mockNews;

      const loadNewsAction = loadNewsActionCreator(payload);

      axios.get = jest.fn().mockResolvedValue({
        status: 200,
        data: { news: mockNews },
      });

      const thunk = loadNewsThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadNewsAction);
    });
  });
});

describe("Given a loadArchivedNewsThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with a loadNews action", async () => {
      const payload = mockNews;

      const loadNewsAction = loadNewsActionCreator(payload);

      axios.get = jest.fn().mockResolvedValue({
        status: 200,
        data: { archivedNews: mockNews },
      });

      const thunk = loadArchivedNewsThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadNewsAction);
    });
  });
});

describe("Given a archiveNewThunk", () => {
  describe("When it is called with an id", () => {
    test("Then it should call dispatch with a deleteNew action", async () => {
      const payload = mockNews[0].id;

      const deleteNewAction = deleteNewActionCreator(payload);

      axios.put = jest.fn().mockResolvedValue({
        status: 200,
        data: { archivedNew: { ...mockNews[0], archived: true } },
      });

      const thunk = archiveNewThunk(mockNews[0].id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(deleteNewAction);
    });
  });
});

describe("Given a deleteNewThunk", () => {
  describe("When it is called with an id", () => {
    test("Then it should call dispatch with a deleteNew action", async () => {
      const payload = mockNews[0].id;

      const deleteNewAction = deleteNewActionCreator(payload);

      axios.delete = jest.fn().mockResolvedValue({
        status: 200,
        data: { archivedNew: { ...mockNews[0], archived: true } },
      });

      const thunk = deleteNewThunk(mockNews[0].id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(deleteNewAction);
    });
  });
});

describe("Given a CreateNewThunk", () => {
  describe("When it is called with  valid submittedNewData", () => {
    test("Then it should call dispatch with a crateNew action", async () => {
      const createdNew = mockNews[0];

      axios.post = jest.fn().mockResolvedValue({
        data: { createdNew: createdNew },
      });

      const thunk = createNewThunk(createdNew);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
