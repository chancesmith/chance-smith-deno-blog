/** @jsx h */

// ,{ ga, redirects, h }
import blog from "blog";

blog({
  title: "Chance Smith",
  description: "Insights on software development, entrepreneurship, and life.",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "Chance Smith",
});

// middlewares: [

// If you want to set up Google Analytics, paste your GA key here.
// ga("UA-XXXXXXXX-X"),

// If you want to provide some redirections, you can specify them here,
// pathname specified in a key will redirect to pathname in the value.
// redirects({
//  "/hello_world.html": "/hello_world",
// }),

// ]
