import blog, { ga, redirects } from "https://deno.land/x/blog@0.1.0/blog.tsx";

const header = `![](/ry.jpg)
# Chance Smith

https://github.com/chance_smith`;

blog({
  title: "Chance Smith",
  author: "Chance Smith",
  header,
  style: `body { padding: 32px 0; background-color: #f0f0f0; }`,
  middlewares: [
    // ga("UA"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
