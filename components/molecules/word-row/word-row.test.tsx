import { render } from "@testing-library/react";
import WordRow from "./word-row";

describe("WordRow", () => {
  it("should be truthy", () => {
    const renderedItem = render(<WordRow wordSize={5} />);
    expect(renderedItem).toBeTruthy();
  });
});
