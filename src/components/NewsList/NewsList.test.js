import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mockNews from "../../mocks/mockNews";
import store from "../../redux/store";
import NewsList from "./NewsList";

describe("Given a NewsList component", () => {
  describe("When it receives an array with 2 news", () => {
    test("Then it should render 2 li elements", () => {
      const newsList = mockNews;
      const expectedListItems = mockNews.length;

      render(
        <Provider store={store}>
          <NewsList news={newsList} />
        </Provider>
      );

      const totalListItems = screen.getAllByRole("listitem");

      expect(totalListItems).toHaveLength(expectedListItems);
    });
  });
});
