import fetch from "node-fetch";
import { TDictionaryApiResponse } from "./dictionary-api.types";

async function checkWordValidity(
  word: string
): Promise<TDictionaryApiResponse> {
  const result = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    {
      method: "GET",
    }
  );

  if (result.status > 404) {
    return {
      status: result.status,
    };
  }

  return {
    status: result.status,
    isWordValid: result.ok,
  };
}
