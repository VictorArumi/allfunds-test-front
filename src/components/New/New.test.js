import { render, screen } from "@testing-library/react";
import New from "./New";
import mockNew from "../../mocks/mockNew";

const expectedTitleText = mockNew.title;
const expectedDescriptionText = mockNew.description;
const expectedAuthorText = mockNew.author.authorName;
const expectedNewBodyText = mockNew.content;
const totalExpectedButtons = 1;
const expectedPostedDate = "December 5th 2022, 9:00 pm";
const expectedArchiveDate = "December 8th 2022, 12:00 am";

describe("Given a New component", () => {
  describe("When it's invoked with archived property false", () => {
    test("Then it should render a the New component with newMock title, author, post dates and content values, and a button with 'Archive New' text", () => {
      const archiveButtonText = "Archive New";

      render(<New _new={mockNew} />);

      const newTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitleText,
      });

      const newDescription = screen.getByRole("heading", {
        level: 4,
        name: expectedDescriptionText,
      });

      const newPostedDate = screen.getByText(expectedPostedDate);
      const newAuthor = screen.getByText(expectedAuthorText, { exact: false });
      const newContent = screen.getByText(expectedNewBodyText);
      const archiveButton = screen.getByRole("button", {
        name: archiveButtonText,
      });

      const buttonsInNew = screen.getAllByRole("button");

      expect(newTitle).toBeInTheDocument();
      expect(newDescription).toBeInTheDocument();
      expect(newPostedDate).toBeInTheDocument();
      expect(newAuthor).toBeInTheDocument();
      expect(newContent).toBeInTheDocument();
      expect(archiveButton).toBeInTheDocument();
      expect(buttonsInNew).toHaveLength(totalExpectedButtons);
    });
  });

  describe("When it's invoked with archived property true", () => {
    test("Then it should render a the New component with newMock title, author, post and archive dates and content values, and a button with 'Delete New' text", () => {
      mockNew.archived = true;
      mockNew.archiveDate = "2022-12-07T23:00:00.000Z";
      const deleteButtonText = "Delete New";

      render(<New _new={mockNew} />);

      const newTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitleText,
      });
      const newDescription = screen.getByRole("heading", {
        level: 4,
        name: expectedDescriptionText,
      });
      const newPostedDate = screen.getByText(expectedPostedDate);
      const newArchivedDate = screen.getByText(expectedArchiveDate);

      const newAuthor = screen.getByText(expectedAuthorText, { exact: false });
      const newContent = screen.getByText(expectedNewBodyText);

      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });

      const buttonsInNew = screen.getAllByRole("button");

      expect(newTitle).toBeInTheDocument();
      expect(newDescription).toBeInTheDocument();
      expect(newPostedDate).toBeInTheDocument();
      expect(newArchivedDate).toBeInTheDocument();
      expect(newAuthor).toBeInTheDocument();
      expect(newContent).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
      expect(buttonsInNew).toHaveLength(totalExpectedButtons);
    });
  });
});
