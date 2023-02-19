import styled from "styled-components";

const headerFonts = "Verdana, Arial, Helvetica, sans-serif";
const paragraphFonts = "Helvetica, Verdana, Arial, sans-serif";

export const TitleH1 = styled.h1`
  font-family: ${headerFonts};
  font-size: 3.5em;
`;

export const Paragraph = styled.p`
  font-family: ${paragraphFonts};
  font-size: 1.2em;
`;

export const ErrorMessageDiv = styled.div`
  font-family: ${paragraphFonts};
  font-size: 1.2em;
  margin: 1em 0 1em 0;
  padding: 0.5em 0 0.5em 0.5em;
  background-color: rgba(255, 56, 56, 20%);
  border: solid rgba(255, 56, 56, 50%) 0.2em;
  border-radius: 0.2em;
`;
