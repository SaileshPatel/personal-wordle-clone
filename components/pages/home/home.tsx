import Head from "next/head";
import { useState } from "react";
import WordRow from "../../molecules/word-row";
import { TitleH1, Paragraph, ErrorMessageDiv } from "./home.styled";

export default function Home() {
  const [isWordCheckSuccessful, setIsWordCheckSuccessful] =
    useState<boolean>(true);
  const [isWordValid, setIsWordValid] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Personal Wordle Clone</title>
        <meta
          name="description"
          content="A small Wordle clone to help learn more about React, Next, etc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <TitleH1>Personal Wordle Clone</TitleH1>
        <Paragraph>Welcome to this Wordle clone.</Paragraph>
        <Paragraph>
          The main purpose of this application is to learn more about how to
          create a React project from scratch, how to structure components, and
          how development work generally on a complex project, like Wordle.
        </Paragraph>
        <WordRow
          wordSize={5}
          setIsWordCheckSuccessful={setIsWordCheckSuccessful}
          setIsWordValid={setIsWordValid}
        />
        {!isWordCheckSuccessful ? (
          <ErrorMessageDiv>
            We could not check the word you entered unfortunately. Please try
            another word or try again later.
          </ErrorMessageDiv>
        ) : null}
        {!isWordValid ? (
          <ErrorMessageDiv>
            We do not recognise the word you have entered. Please try another
            word.
          </ErrorMessageDiv>
        ) : null}
      </main>
    </>
  );
}
