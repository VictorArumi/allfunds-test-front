import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a the header component with h1 heading 'Allfunds news app' and 2 buttons with text 'News' and 'Archived'", () => {
      const expectedHeadingText = "Allfunds news app";
      const totalExpectedButtons = 2;
      const newsButtonText = "News";
      const archivedButtonText = "Archived";

      render(<Header />);

      const selectedText = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });
      const newsButton = screen.getByRole("button", {
        name: newsButtonText,
      });
      const archivedButton = screen.getByRole("button", {
        name: archivedButtonText,
      });
      const buttonsInHeader = screen.getAllByRole("button");

      expect(selectedText).toBeInTheDocument();
      expect(newsButton).toBeInTheDocument();
      expect(archivedButton).toBeInTheDocument();
      expect(buttonsInHeader).toHaveLength(totalExpectedButtons);
    });
  });
});
