import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

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
      <main className={styles.main}>
        <h1>Personal Wordle Clone</h1>
      </main>
    </>
  );
}
