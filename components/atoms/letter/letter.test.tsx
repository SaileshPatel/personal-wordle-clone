import { render, screen, fireEvent } from "@testing-library/react";
import Letter from "./letter";

describe("Letter", () => {
  it("should be truthy", () => {
    const renderedItem = render(
      <Letter
        letterIndex={1}
        placeLetterInWord={jest.fn()}
        checkIfWordIsValid={jest.fn()}
        chosenWordLetter={"L"}
        checkLetterState={false}
      />
    );
    expect(renderedItem).toBeTruthy();
  });
});

describe("when a letter is entered", () => {
  it("should display in the text box", async () => {
    const renderedItem = render(
      <Letter
        letterIndex={1}
        placeLetterInWord={jest.fn()}
        checkIfWordIsValid={jest.fn()}
        chosenWordLetter={"L"}
        checkLetterState={false}
      />
    );
    const input = renderedItem.getByLabelText("letter");

    fireEvent.change(input, { target: { value: "A" } });
    expect(screen.getByDisplayValue("A")).toBeInTheDocument();
  });

  describe("when enter key is pressed", () => {
    it("should call checkIfWordIsValid function", () => {
      const mockCheckIfWordIsValid = jest.fn();
      const renderedItem = render(
        <Letter
          letterIndex={1}
          placeLetterInWord={jest.fn()}
          checkIfWordIsValid={mockCheckIfWordIsValid}
          chosenWordLetter={"L"}
          checkLetterState={false}
        />
      );
      const input = renderedItem.getByLabelText("letter");

      fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

      expect(mockCheckIfWordIsValid).toBeCalledTimes(1);
    });
  });
});
