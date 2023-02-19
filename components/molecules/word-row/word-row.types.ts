import { Dispatch, SetStateAction } from "react";

export type TWordRowProps = {
  wordSize: number;
  setIsWordCheckSuccessful: Dispatch<SetStateAction<boolean | undefined>>;
};
