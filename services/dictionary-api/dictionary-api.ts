import fetch from "node-fetch";
import { TDictionaryApiResponse } from "./dictionary-api.types";

export async function getWordValidity(
  word: string
): Promise<TDictionaryApiResponse> {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    {
      method: "GET",
    }
  );

  if (response.status > 404) {
    return {
      status: response.status,
    };
  }

  return {
    status: response.status,
    isWordValid: response.ok,
  };
}
