import { render } from "brisa/test";
import { describe, expect, it } from "bun:test";
import Home from ".";

describe("Index", () => {
  it("should render the home page with the correct title", async () => {
    const { container } = await render(<Home />);
    const { title } = container;

    expect(title).toMatch(/^Bjs$/);
  });
});
