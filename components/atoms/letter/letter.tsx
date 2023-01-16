import { useState } from "react";

export default function Letter() {
  const [letterEntered, setLetterEntered] = useState<string>("");
  return (
    <input
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
