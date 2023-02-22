export type TLetterProps = {
  letterIndex: number;
  placeLetterInWord: (
    letterToInsert: string,
    insertedLetterIndex: number
  ) => void;
  checkIfWordIsValid: (letterIndex: number) => void;
  chosenWordLetter: string;
  checkLetterState: boolean;
};

export type TLetterState =
  | "Neutral"
  | "Successful"
  | "Unsuccessful"
  | "PartialSuccess";

export type TStyledLetterInputProps = {
  letterState: TLetterState;
};
