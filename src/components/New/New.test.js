import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import New from "./New";
import mockNew from "../../mocks/mockNew";
import { Provider } from "react-redux";
import store from "../../redux/store";

const expectedTitleText = mockNew.title;
const expectedDescriptionText = mockNew.description;
const expectedAuthorText = mockNew.author.authorName;
const expectedNewBodyText = mockNew.content;
const totalExpectedButtons = 1;
const expectedPostedDate = "December 5th 2022";
const expectedArchiveDate = "December 7th 2022";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a New component", () => {
  describe("When it's invoked with archived property false", () => {
    test("Then it should render a the New component with newMock title, author, post dates and content values, and a button with 'Archive New' text which should call dispatch when is clicked", () => {
      const archiveButtonText = "Archive New";

      render(
        <Provider store={store}>
          <New _new={mockNew} />
        </Provider>
      );

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

      userEvent.click(archiveButton);

      expect(newTitle).toBeInTheDocument();
      expect(newDescription).toBeInTheDocument();
      expect(newPostedDate).toBeInTheDocument();
      expect(newAuthor).toBeInTheDocument();
      expect(newContent).toBeInTheDocument();
      expect(archiveButton).toBeInTheDocument();
      expect(buttonsInNew).toHaveLength(totalExpectedButtons);
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe("When it's invoked with archived property true", () => {
    test("Then it should render a the New component with newMock title, author, post and archive dates and content values, and a button with 'Delete New' text", () => {
      mockNew.archived = true;
      mockNew.archiveDate = "2022-12-07T17:00:00.000Z";
      const deleteButtonText = "Delete New";

      render(
        <Provider store={store}>
          <New _new={mockNew} />
        </Provider>
      );

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

      userEvent.click(deleteButton);

      expect(newTitle).toBeInTheDocument();
      expect(newDescription).toBeInTheDocument();
      expect(newPostedDate).toBeInTheDocument();
      expect(newArchivedDate).toBeInTheDocument();
      expect(newAuthor).toBeInTheDocument();
      expect(newContent).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
      expect(buttonsInNew).toHaveLength(totalExpectedButtons);
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
