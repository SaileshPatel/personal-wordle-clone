import { useState } from "react";
import { checkWordValidity } from "../../../services/dictionary-api/dictionary-api";
import Letter from "../../atoms";
import { TWordRowProps } from "./word-row.types";

export default function WordRow({
  wordSize,
  setIsWordCheckSuccessful,
  setIsWordValid,
}: TWordRowProps) {
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

  const checkIfWordIsValid = async (index: number) => {
    if (index === word.length - 1) {
      setIsWordValid(true);
      setIsWordCheckSuccessful(true);

      const response = await checkWordValidity(
        word.toString().replace(/,/g, "")
      );
      if (
        response.isWordValid?.valueOf() === undefined ||
        response.status > 404
      ) {
        setIsWordValid(true);
        setIsWordCheckSuccessful(false);
        return;
      }

      setIsWordValid(response.isWordValid);
      setIsWordCheckSuccessful(true);
    }
  };

  return (
    <>
      {[...Array(wordSize)].map((x, i) => (
        <Letter
          key={i}
          letterPlace={i}
          placeLetterInWord={placeLetterInWord}
          checkIfWordIsValid={checkIfWordIsValid}
        />
      ))}
    </>
  );
}
