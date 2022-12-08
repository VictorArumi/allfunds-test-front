import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import NewForm from "./NewForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a NewForm component", () => {
  describe("When it's invoked and the user types into title, description and content inputs", () => {
    test("Then the value of every input field should be the same that has been typed", () => {
      const titleInputName = "Title";
      const titleTypedText = "typing... this title";
      const descriptionInputName = "Description";
      const descriptionTypedText = "typing... this description";
      const contentInputName = "Content";
      const contentTypedText = "typing... this content";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewForm />
          </Provider>
        </BrowserRouter>
      );

      const titleInput = screen.getByRole("textbox", {
        name: titleInputName,
      });
      userEvent.type(titleInput, titleTypedText);

      const descriptionInput = screen.getByRole("textbox", {
        name: descriptionInputName,
      });
      userEvent.type(descriptionInput, descriptionTypedText);

      const contentInput = screen.getByRole("textbox", {
        name: contentInputName,
      });
      userEvent.type(contentInput, contentTypedText);

      expect(titleInput).toHaveValue(titleTypedText);
      expect(descriptionInput).toHaveValue(descriptionTypedText);
      expect(contentInput).toHaveValue(contentTypedText);
    });
  });

  describe("When it's invoked and the user clicks on the button with text 'Create'", () => {
    test("Then it should call dispatch", () => {
      const setOpenForm = jest.fn();
      const buttonText = "Create";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewForm setOpenForm={setOpenForm} />
          </Provider>
        </BrowserRouter>
      );

      const createButton = screen.getByRole("button", {
        name: buttonText,
      });
      userEvent.click(createButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
