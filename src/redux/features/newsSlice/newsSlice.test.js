import mockNews from "../../../mocks/mockNews";
import newsReducer, { loadNewsActionCreator } from "./newsSlice";

const initialNewsState = [];

describe("Given a NewsSlice reducer", () => {
  describe("When it receives an initial state and a loadNews action", () => {
    test("Then it should return the new state with a list of news", () => {
      const payload = mockNews;

      const expectedUpdatedNews = mockNews;

      const loadNewsAction = loadNewsActionCreator(payload);
      const updatedNewsState = newsReducer(initialNewsState, loadNewsAction);

      expect(updatedNewsState).toEqual(expectedUpdatedNews);
    });
  });
});
