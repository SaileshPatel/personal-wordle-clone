import { Dispatch, SetStateAction } from "react";

export type TWordRowProps = {
  chosenWord: string;
  setIsWordCheckSuccessful: Dispatch<SetStateAction<boolean>>;
  setIsWordValid: Dispatch<SetStateAction<boolean>>;
};
