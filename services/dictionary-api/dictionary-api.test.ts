import { checkWordValidity } from "./dictionary-api";
import fetch from "node-fetch";

const { Response } = jest.requireActual("node-fetch");

jest.mock("node-fetch", () => jest.fn());

describe("dictionaryApi", () => {
  describe("checkWordValidity", () => {
    it("should return isValid as true when status is 200", async () => {
      const expectedResponse = { status: 200 };
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify(expectedResponse), {
          status: 200,
        })
      );

      const result = await checkWordValidity("word");

      expect(result.status).toBe(200);
      expect(result.isWordValid).toBeTruthy();
    });

    it("should return isValid as false when status is 404", async () => {
      const expectedResponse = {};
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify(expectedResponse), {
          status: 404,
        })
      );

      const result = await checkWordValidity("word");

      expect(result.status).toBe(404);
      expect(result.isWordValid).toBeFalsy();
    });

    it("should not return isValid when status is above 404", async () => {
      const expectedResponse = {};
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify(expectedResponse), {
          status: 429,
        })
      );

      const result = await checkWordValidity("ahaha");

      expect(result).not.toHaveProperty("isWordValid");
    });
  });
});