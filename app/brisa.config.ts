import type { Configuration } from "brisa";
import tailwindCSS from "brisa-tailwindcss";

export default {
  integrations: [
    tailwindCSS({
      embedded: true,
    }),
  ],
  extendPlugins(brisa, options) {
    return [...brisa];
  },
} satisfies Configuration;
