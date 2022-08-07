import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import MovieTrailerComponent from "./movie-trailer.component";

jest.mock("react-youtube", () => () => "YouTubeComponent");

describe("MovieTrailerComponent", () => {
  afterEach(cleanup);

  test('should render "MovieTrailerComponent" correctly', () => {
    const props = {
      videoId: "",
      opts: {},
    };
    const { container } = render(<MovieTrailerComponent {...props} />);
    expect(container).toBeDefined();
    expect(screen.getByText("Watch trailer here")).toBeInTheDocument();
    expect(container.innerHTML).toContain("YouTubeComponent");
  });
});
