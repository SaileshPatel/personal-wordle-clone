export type TLetterProps = {
  letterPosition: number;
  placeLetterInWord: (letter: string, index: number) => void;
  checkIfWordIsValid: (index: number) => void;
  chosenWordLetter?: string;
};

export type TLetterState =
  | "Neutral"
  | "Successful"
  | "Unsuccessful"
  | "PartialSuccess";

export type TStyledLetterInputProps = {
  letterState: TLetterState;
};
