import Letter from "../../atoms";
import { TWordRowProps } from "./word-row.types";

export default function WordRow({ wordSize }: TWordRowProps) {
  return (
    <>
      {[...Array(wordSize)].map((x, i) => 
        <Letter key={i} />
      )}
    </>
  )
}
