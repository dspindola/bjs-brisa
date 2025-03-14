import { dangerHTML } from "brisa";
import { renderToString } from "brisa/server";

export async function Ico() {
  return await renderToString(
    dangerHTML(
      `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="49" />
        <text x="50" y="50" text-anchor="middle" fill="currentColor">B</text>
        <text x="50" y="50" text-anchor="middle" fill="currentColor">J</text>
        <text x="50" y="50" text-anchor="middle" fill="currentColor">S</text>
        <text x="50" y="50" text-anchor="middle" fill="currentColor">I</text>
        <text x="50" y="50" text-anchor="middle" fill="currentColor">S</text>
        <text x="50" y="50" text-anchor="middle" fill="currentColor">A</text>
      </svg>
    `
    )
  );
}
