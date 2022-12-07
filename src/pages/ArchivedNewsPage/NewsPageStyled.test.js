import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ArchivedNewsPage from "./ArchivedNewsPage";

describe("Given a ArchivedNewsPage component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the NewsPage component with a heading 'Archived News view' and a unordenated list", () => {
      const expectedHeading = "Archived News view";

      render(
        <Provider store={store}>
          <ArchivedNewsPage />
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
