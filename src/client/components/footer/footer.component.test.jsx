import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import FooterComponent from "./footer.component";
import { FOOTER_TEXT } from "../../constants";

jest.mock("react-icons/ai", () => ({
  ...jest.requireActual("react-icons/ai"),
  AiFillInstagram: () => "AiFillInstagram-Icon",
  AiOutlineTwitter: () => "AiOutlineTwitter-Icon",
}));

describe("FooterComponent", () => {
  afterEach(cleanup);

  test('should render "FooterComponent" correctly', () => {
    const { container } = render(<FooterComponent />);
    expect(container).toBeDefined();
  });

  test("should display footer text and icons", () => {
    const { container } = render(<FooterComponent />);

    expect(screen.getByText(FOOTER_TEXT)).toBeInTheDocument();
    expect(container.innerHTML).toContain(
      "AiFillInstagram-IconAiOutlineTwitter-Icon"
    );
  });
});
