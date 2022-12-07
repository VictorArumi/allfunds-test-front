import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a the header component with h1 heading 'Allfunds news app' and 2 buttons with text 'News' and 'Archived'", () => {
      const totalExpectedButtons = 2;
      const newsButtonText = "News";
      const archivedButtonText = "Archived";

      render(
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      );

      const newsButton = screen.getByRole("link", {
        name: newsButtonText,
      });
      const archivedButton = screen.getByRole("link", {
        name: archivedButtonText,
      });
      const buttonsInNavigationBar = screen.getAllByRole("link");

      expect(newsButton).toBeInTheDocument();
      expect(archivedButton).toBeInTheDocument();
      expect(buttonsInNavigationBar).toHaveLength(totalExpectedButtons);
    });
  });
});
