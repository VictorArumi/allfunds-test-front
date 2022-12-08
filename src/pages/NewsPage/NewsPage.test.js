import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import store from "../../redux/store";
import NewsPage from "./NewsPage";
import { BrowserRouter } from "react-router-dom";

describe("Given a NewsPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a the NewsPage component with a heading 'News view' and a unordenated list, and 'add new' text", () => {
      const expectedHeading = "News view";

      render(
        <Provider store={store}>
          <NewsPage />
        </Provider>
      );

      const selectedText = screen.getByRole("heading", {
        name: expectedHeading,
      });

      const selectedClickableText = screen.getByText("Add new");

      const selectedList = screen.getByRole("list");

      expect(selectedText).toBeInTheDocument();
      expect(selectedClickableText).toBeInTheDocument();
      expect(selectedList).toBeInTheDocument();
    });
  });

  describe("When the user clicks in 'Add new'", () => {
    test("Then it should render a the NewsPage component with a heading 'News view', a unordenated list, and 3 inputs (form)", () => {
      const clickableText = "Add new";
      const expectedTotalInputs = 3;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewsPage />
          </Provider>
        </BrowserRouter>
      );
      const selectedClickableAddNewText = screen.getByText(clickableText);
      userEvent.click(selectedClickableAddNewText);

      const totalInputs = screen.getAllByRole("textbox");

      expect(totalInputs).toHaveLength(expectedTotalInputs);
    });
  });
});
