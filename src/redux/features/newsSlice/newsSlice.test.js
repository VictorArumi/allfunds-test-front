import mockNews from "../../../mocks/mockNews";
import newsReducer, {
  createNewActionCreator,
  deleteNewActionCreator,
  loadNewsActionCreator,
} from "./newsSlice";

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

  describe("When it receives an initial state and a deleteNew action", () => {
    test("Then it should return the new state with a list of news without the new with the id provided", () => {
      const payload = mockNews[1].id;

      const expectedUpdatedNews = [mockNews[0]];

      const deleteNewAction = deleteNewActionCreator(payload);
      const updatedNewsState = newsReducer(mockNews, deleteNewAction);

      expect(updatedNewsState).toEqual(expectedUpdatedNews);
    });
  });

  describe("When it receives an initial state and a createNew action", () => {
    test("Then it should return the new state with the original list plus the created new", () => {
      const payload = mockNews[0];

      const expectedUpdatedNews = [...mockNews, mockNews[0]];

      const createNewAction = createNewActionCreator(payload);
      const updatedNewsState = newsReducer(mockNews, createNewAction);

      expect(updatedNewsState).toEqual(expectedUpdatedNews);
    });
  });
});
