import Head from "next/head";
import { Inter } from "@next/font/google";
import { TitleH1, Paragraph } from "./index.styled";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      </main>
    </>
  );
}
