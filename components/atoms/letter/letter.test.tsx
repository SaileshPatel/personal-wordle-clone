import { render, screen, fireEvent } from "@testing-library/react";
import Letter from "./letter";

describe("WordRow", () => {
  it("should be truthy", () => {
    const renderedItem = render(<Letter />);
    expect(renderedItem).toBeTruthy();
  });
});
