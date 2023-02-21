export type TLetterProps = {
  letterPlace: number;
  placeLetterInWord: (letter: string, index: number) => void;
  checkIfWordIsValid: (index: number) => void;
  chosenWordLetter?: string;
};
