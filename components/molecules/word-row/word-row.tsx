import { useState } from "react";
import Letter from "../../atoms";
import { TWordRowProps } from "./word-row.types";

export default function WordRow({ wordSize }: TWordRowProps) {
  const [word, setWord] = useState<string[]>([]);

  const placeLetterInWord = (letter: string, index: number) => {
    setWord([]);
    const newWord = [...word?.slice(0, index), letter, ...word?.slice(index)];
    setWord(newWord);
  };

  /*
   * TODO:
   * Add functionality to remove letter when going back
   */
  return (
    <>
      {[...Array(wordSize)].map((x, i) => (
        <Letter key={i} letterPlace={i} placeLetterInWord={placeLetterInWord} />
      ))}
    </>
  );
}
