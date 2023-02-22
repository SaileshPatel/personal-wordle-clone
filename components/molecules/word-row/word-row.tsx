import { useState } from "react";
import { getWordValidity } from "../../../services/dictionary-api/dictionary-api";
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

  const checkIfWordIsValid = async (letterIndex: number) => {
    if (letterIndex === chosenWord.length - 1) {
      setIsWordValid(true);
      setIsWordCheckSuccessful(true);
      setCheckLetterState(false);

      const wholeWord = enteredWord.toString().replace(/,/g, "");

      const wordCheck = await getWordValidity(wholeWord);
      if (
        wordCheck.isWordValid?.valueOf() === undefined ||
        wordCheck.status > 404
      ) {
        setIsWordValid(true);
        setIsWordCheckSuccessful(false);
        return;
      }

      setIsWordValid(wordCheck.isWordValid);
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
