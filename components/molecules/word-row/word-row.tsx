import { useState } from "react";
import { checkWordValidity } from "../../../services/dictionary-api/dictionary-api";
import Letter from "../../atoms/letter";
import { TWordRowProps } from "./word-row.types";

export default function WordRow({
  chosenWord,
  setIsWordCheckSuccessful,
  setIsWordValid,
}: TWordRowProps) {
  const [enteredWord, setEnteredWord] = useState<string[]>([]);
  const [checkLetterState, setCheckLetterState] = useState<boolean>(false);

  const placeLetterInWord = (
    letterToInsert: string,
    insertedLetterIndex: number
  ) => {
    setEnteredWord([]);
    const newWord = letterToInsert
      ? [
          ...enteredWord.slice(0, insertedLetterIndex),
          letterToInsert,
          ...enteredWord.slice(insertedLetterIndex),
        ]
      : enteredWord.filter((_e, i) => {
          return i !== insertedLetterIndex;
        });

    setEnteredWord(newWord);
  };

  const checkIfWordIsValid = async (index: number) => {
    if (index === enteredWord.length - 1) {
      setIsWordValid(true);
      setIsWordCheckSuccessful(true);
      setCheckLetterState(false);

      const response = await checkWordValidity(
        enteredWord.toString().replace(/,/g, "")
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
      setCheckLetterState(true);
    }
  };

  return (
    <>
      {chosenWord.split("").map((letter, index) => (
        <Letter
          key={index}
          letterIndex={index}
          chosenWordLetter={letter}
          placeLetterInWord={placeLetterInWord}
          checkIfWordIsValid={checkIfWordIsValid}
          checkLetterState={checkLetterState}
        />
      ))}
    </>
  );
}
