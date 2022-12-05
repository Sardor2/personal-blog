import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",

          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
        },
      ],
    ],
  },
  integrations: [tailwind(), mdx()],
  server: {
    port: 8080,
  },
});
