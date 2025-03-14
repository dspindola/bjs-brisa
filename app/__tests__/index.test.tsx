import { render } from "brisa/test";
import { describe, expect, it } from "bun:test";
import Homepage from "@/pages";

describe("Index", () => {
  it("should render the home page with the correct title", async () => {
    const { container } = await render(<Homepage />, {
      baseElement: document.body,
      locale: "en",
    });
    expect(container.querySelector("h1")?.textContent).toMatch(`Bjs Brisa`);
  });
});
