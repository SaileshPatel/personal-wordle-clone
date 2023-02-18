import { useState } from "react";
import { StyledLetterInput } from "./letter.styled";

export default function Letter() {
  const [letterEntered, setLetterEntered] = useState<string>("");
  return (
    <StyledLetterInput
      aria-label="letter"
      type="text"
      minLength={1}
      maxLength={1}
      value={letterEntered}
      onChange={(event) => {
        setLetterEntered(event.target.value);
      }}
    />
  );
}
