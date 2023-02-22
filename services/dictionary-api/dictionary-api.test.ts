import { getWordValidity } from "./dictionary-api";
import fetch from "node-fetch";

const { Response } = jest.requireActual("node-fetch");

jest.mock("node-fetch", () => jest.fn());

describe("dictionaryApi", () => {
  describe("getWordValidity", () => {
    it("should return isValid as true when status is 200", async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify({}), {
          status: 200,
        })
      );

      const result = await getWordValidity("word");

      expect(result.status).toBe(200);
      expect(result.isWordValid).toBeTruthy();
    });

    it("should return isValid as false when status is 404", async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify({}), {
          status: 404,
        })
      );

      const result = await getWordValidity("word");

      expect(result.status).toBe(404);
      expect(result.isWordValid).toBeFalsy();
    });

    it("should not return isValid when status is above 404", async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify({}), {
          status: 429,
        })
      );

      const result = await getWordValidity("ahaha");

      expect(result).not.toHaveProperty("isWordValid");
    });
  });
});
