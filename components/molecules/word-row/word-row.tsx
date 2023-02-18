import { useState } from "react";
import Letter from "../../atoms";
import { TWordRowProps } from "./word-row.types";

export default function WordRow({ wordSize }: TWordRowProps) {
  const [word, setWord] = useState<string[]>();

  return (
    <>
      {[...Array(wordSize)].map((x, i) => (
        <Letter key={i} />
      ))}
    </>
  );
}
