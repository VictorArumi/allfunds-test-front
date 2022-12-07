import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

test("renders news app in progress", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Allfunds news app/i);
  expect(linkElement).toBeInTheDocument();
});
