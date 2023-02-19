import Head from "next/head";
import { useState } from "react";
import WordRow from "../../molecules/";
import { TitleH1, Paragraph } from "./home.styled";

export default function Home() {
  const [isWordCheckSuccessful, setIsWordCheckSuccessful] =
    useState<boolean>(true);
  const [isWordValid, setIsWordValid] = useState<boolean>(false);

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
        {!isWordCheckSuccessful ? (
          <Paragraph>
            We could not check the word you entered unfortunately. Please try
            again later.
          </Paragraph>
        ) : null}
        <WordRow
          wordSize={5}
          setIsWordCheckSuccessful={setIsWordCheckSuccessful}
          setIsWordValid={setIsWordValid}
        />
      </main>
    </>
  );
}
