import axios from "axios";
import mockNews from "../../mocks/mockNews";
import { loadNewsActionCreator } from "../features/newsSlice/newsSlice";
import { loadNewsThunk } from "./newsThunks";

describe("Given a loadNewsThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with a loadNews action", async () => {
      const dispatch = jest.fn();

      const payload = mockNews;

      const loadBookingsAction = loadNewsActionCreator(payload);

      axios.get = jest.fn().mockResolvedValue({
        status: 200,
        data: { news: mockNews },
      });

      const thunk = loadNewsThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadBookingsAction);
    });
  });
});
