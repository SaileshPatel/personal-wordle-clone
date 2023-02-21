import { useEffect, useState } from "react";
import { StyledLetterInput } from "./letter.styled";
import { TLetterProps, TLetterState } from "./letter.types";

export default function Letter({
  letterPosition,
  placeLetterInWord,
  checkIfWordIsValid,
  chosenWordLetter,
  checkLetterState,
}: TLetterProps) {
  const [letterEntered, setLetterEntered] = useState<string>("");
  const [letterState, setLetterState] = useState<TLetterState>("Neutral");

  useEffect(() => {
    if (checkLetterState) {
      if (letterEntered == chosenWordLetter) {
        setLetterState("Successful");
      } else {
        setLetterState("Unsuccessful");
      }
    }
  }, [checkLetterState, chosenWordLetter, letterEntered]);

  return (
    <StyledLetterInput
      aria-label="letter"
      type="text"
      minLength={1}
      maxLength={1}
      value={letterEntered}
      letterState={letterState}
      onChange={(event) => {
        setLetterEntered(event.target.value);
        placeLetterInWord(event.target.value, letterPosition);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          checkIfWordIsValid(letterPosition);
        }
      }}
    />
  );
}
