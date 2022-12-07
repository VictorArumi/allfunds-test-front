import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a the header component with h1 heading 'Allfunds news app' and 2 buttons with text 'News' and 'Archived'", () => {
      const expectedHeadingText = "Allfunds news app";

      render(
        <BrowserRouter>
          <Header />;
        </BrowserRouter>
      );

      const selectedText = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(selectedText).toBeInTheDocument();
    });
  });
});
