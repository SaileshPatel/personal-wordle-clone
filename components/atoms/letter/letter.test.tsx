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

  describe("when checkLetterState is true", () => {
    describe("and the entered letter matches the chosen word letter", () => {
      it("the background color should match #5aff54b8", () => {
        const renderedItem = render(
          <Letter
            letterIndex={1}
            placeLetterInWord={jest.fn()}
            checkIfWordIsValid={jest.fn()}
            chosenWordLetter={"L"}
            checkLetterState={true}
          />
        );

        const { container } = renderedItem;
        const input = renderedItem.getByLabelText("letter");

        fireEvent.change(input, { target: { value: "L" } });
        expect(container.children[0]).toHaveStyle(
          "background-color: #5aff54b8"
        );
      });
    });

    describe("and the entered letter does not matches the chosen word letter", () => {
      it("the background color should match #00110063", () => {
        const renderedItem = render(
          <Letter
            letterIndex={1}
            placeLetterInWord={jest.fn()}
            checkIfWordIsValid={jest.fn()}
            chosenWordLetter={"A"}
            checkLetterState={true}
          />
        );

        const { container } = renderedItem;
        const input = renderedItem.getByLabelText("letter");

        fireEvent.change(input, { target: { value: "L" } });
        expect(container.children[0]).toHaveStyle(
          "background-color: #00110063"
        );
      });
    });
  });
});
