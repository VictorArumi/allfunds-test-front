import axios from "axios";
import mockNews from "../../mocks/mockNews";
import { loadNewsActionCreator } from "../features/newsSlice/newsSlice";
import { loadArchivedNewsThunk, loadNewsThunk } from "./newsThunks";

describe("Given a loadNewsThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with a loadNews action", async () => {
      const dispatch = jest.fn();

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
      const dispatch = jest.fn();

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
