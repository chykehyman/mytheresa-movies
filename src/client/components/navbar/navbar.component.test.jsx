import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavbarComponent from "./navbar.component";

const wishListItems = [{}, {}];
jest.mock("../../hooks/localStorageHook", () => () => [
  wishListItems,
  jest.fn(),
]);
describe("NavbarComponent", () => {
  afterEach(cleanup);

  test('should render "NavbarComponent" correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <NavbarComponent />
      </BrowserRouter>
    );

    expect(container).toBeDefined();
    expect(screen.getByText("MyTheresa Movies")).toBeInTheDocument();
    expect(screen.getByTestId("wish-list-count")).toHaveTextContent(
      wishListItems.length
    );
  });
});
