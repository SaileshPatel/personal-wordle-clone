import { useState } from "react";
import { StyledLetterInput } from "./letter.styled";
import { TLetterProps } from "./letter.types";

export default function Letter({
  letterPlace,
  placeLetterInWord,
  checkIfWordIsValid,
}: TLetterProps) {
  const [letterEntered, setLetterEntered] = useState<string>("");
  return (
    <StyledLetterInput
      aria-label="letter"
      type="text"
      minLength={1}
      maxLength={1}
      value={letterEntered}
      letterState="Neutral"
      onChange={(event) => {
        setLetterEntered(event.target.value);
        placeLetterInWord(event.target.value, letterPlace);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          checkIfWordIsValid(letterPlace);
        }
      }}
    />
  );
}
