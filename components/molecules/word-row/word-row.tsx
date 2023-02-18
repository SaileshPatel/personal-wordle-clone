import { useState } from "react";
import Letter from "../../atoms";
import { TWordRowProps } from "./word-row.types";

export default function WordRow({ wordSize }: TWordRowProps) {
  const [word, setWord] = useState<string[]>([]);

  const placeLetterInWord = (letter: string, index: number) => {
    setWord([]);
    const newWord = letter
      ? [...word?.slice(0, index), letter, ...word?.slice(index)]
      : word.filter((e, i) => {
          return i !== index;
        });

    setWord(newWord);
  };

  return (
    <>
      {[...Array(wordSize)].map((x, i) => (
        <Letter key={i} letterPlace={i} placeLetterInWord={placeLetterInWord} />
      ))}
    </>
  );
}
