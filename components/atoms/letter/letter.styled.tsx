import styled from "styled-components";
import { TStyledLetterInputProps } from "./letter.types";

const size = "4rem";

const getBackgroundColor = (state: string) => {
  switch (state) {
    case "Neutral":
      return "#efefefc4";
    case "Successful":
      return "#5aff54b8";
    case "Unsuccessful":
      return "#00110063";
    case "PartialSuccess":
      return "#ff7916c4";
    default:
      return "#ffffff00";
  }
};

export const StyledLetterInput = styled.input<TStyledLetterInputProps>`
  width: ${size};
  height: ${size};
  font-size: ${size};
  caret-color: transparent;
  text-align: center;
  background-color: ${(prop) => getBackgroundColor(prop.letterState)};
  margin-left: 0.3rem;
`;
