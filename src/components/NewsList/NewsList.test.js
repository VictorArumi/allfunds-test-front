import { render, screen } from "@testing-library/react";
import mockNews from "../../mocks/mockNews";
import NewsList from "./NewsList";

describe("Given a NewsList component", () => {
  describe("When it receives an array with 2 news", () => {
    test("Then it should render 2 li elements", () => {
      const newsList = mockNews;
      const expectedListItems = mockNews.length;

      render(<NewsList news={newsList} />);

      const totalListItems = screen.getAllByRole("listitem");

      expect(totalListItems).toHaveLength(expectedListItems);
    });
  });
});
