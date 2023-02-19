import { render, screen, fireEvent } from "@testing-library/react";
import WordRow from "./word-row";

describe("WordRow", () => {
  it("should be truthy", () => {
    const renderedItem = render(
      <WordRow
        wordSize={5}
        setIsWordCheckSuccessful={jest.fn()}
        setIsWordValid={jest.fn()}
      />
    );
    expect(renderedItem).toBeTruthy();
  });

  describe("when a letter is added", () => {
    it("it should be displayed on screen", () => {
      const renderedItem = render(
        <WordRow
          wordSize={1}
          setIsWordCheckSuccessful={jest.fn()}
          setIsWordValid={jest.fn()}
        />
      );
      const input = renderedItem.getByLabelText("letter");

      fireEvent.change(input, { target: { value: "A" } });
      expect(screen.getByDisplayValue("A")).toBeInTheDocument();
    });
  });

  describe("when a letter is removed", () => {
    it("it should not be displayed on screen", () => {
      const renderedItem = render(
        <WordRow
          wordSize={1}
          setIsWordCheckSuccessful={jest.fn()}
          setIsWordValid={jest.fn()}
        />
      );
      const input = renderedItem.getByLabelText("letter");

      fireEvent.change(input, { target: { value: "A" } });
      fireEvent.change(input, { target: { value: "" } });
      const renderedLetter = screen.queryByText("A");
      expect(renderedLetter).not.toBeInTheDocument();
    });
  });
});
