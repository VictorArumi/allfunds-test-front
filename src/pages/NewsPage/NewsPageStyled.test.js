import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import NewsPage from "./NewsPage";

describe("Given a NewsPage component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the NewsPage component with a heading 'News view' and a unordenated list", () => {
      const expectedHeading = "News view";

      render(
        <Provider store={store}>
          <NewsPage />
        </Provider>
      );

      const selectedText = screen.getByRole("heading", {
        name: expectedHeading,
      });

      const selectedList = screen.getByRole("list");

      expect(selectedText).toBeInTheDocument();
      expect(selectedList).toBeInTheDocument();
    });
  });
});
