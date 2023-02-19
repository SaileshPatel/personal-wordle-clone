import { render } from "@testing-library/react";
import Home from "./home";

describe("Home", () => {
  it("should be truthy", () => {
    const renderedItem = render(<Home />);

    expect(renderedItem).toBeTruthy();
  });
});
