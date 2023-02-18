import { render, screen, fireEvent } from "@testing-library/react";
import Letter from "./letter";

describe("WordRow", () => {
  it("should be truthy", () => {
    const renderedItem = render(<Letter />);
    expect(renderedItem).toBeTruthy();
  });
});
describe("when a letter is entered", () => {
  it("should display in the text box", async () => {
    const renderedItem = render(<Letter />);
    const input = renderedItem.getByLabelText("letter");

    fireEvent.change(input, { target: { value: "A" } });
    expect(screen.getByDisplayValue("A")).toBeInTheDocument();
  });
});
