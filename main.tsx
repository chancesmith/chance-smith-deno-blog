/** @jsx h */

// ,{ ga, redirects, h }
import blog, { h } from "blog";

const HEADER = {
  textAlign: "center",
  padding: "2rem",
  fontSize: "2rem",
  fontWeight: "bold",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
};

blog({
  title: "Chance Smith",
  description: "Building Software Teams",
  header: (
    <header class="w-full h-90 lt-sm:h-80 bg-cover bg-center bg-no-repeat">
      <div class="max-w-screen-sm h-full px-6 mx-auto flex flex-col items-center justify-center">
        <div
          href="/"
          class="bg-cover bg-center bg-no-repeat w-25 h-25 border-4 border-white rounded-full relative"
          style="background-image: url(./assets/chance-smith.png);"
        >
          <div
            href="/"
            class="bg-cover bg-center bg-no-repeat bg-sky-500 w-15 h-15 border-4 border-white rounded-full absolute top-4 right--6 flex justify-center items-center text-2xl font-bold text-white"
            style="background-image: url(./assets/chance-smith.png);"
          >
            {/* S */}
          </div>
        </div>
        <h1 class="mt-3 text-4xl text-gray-900 dark:text-gray-100 font-bold">
          Chance Smith
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Building Software Teams
        </p>
        <nav class="mt-3 flex gap-2">
          <a
            class="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-600/10 dark:bg-gray-400/10 text-gray-700 dark:text-gray-400 hover:bg-gray-600/15 dark:hover:bg-gray-400/15 hover:text-black dark:hover:text-white transition-colors group"
            href="https://github.com/chancesmith"
            rel=""
            target="_self"
          >
            <svg
              class="inline-block w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2C5.58161 2 2 5.67194 2 10.2029C2 13.8265 4.292 16.9015 7.4712 17.9857C7.8712 18.0611 8.01681 17.808 8.01681 17.5902C8.01681 17.3961 8.01042 16.8794 8.00641 16.1956C5.7808 16.6911 5.3112 15.0959 5.3112 15.0959C4.948 14.1476 4.4232 13.8954 4.4232 13.8954C3.69681 13.3876 4.47841 13.3975 4.47841 13.3975C5.28081 13.4548 5.70322 14.2426 5.70322 14.2426C6.41683 15.4955 7.57603 15.1335 8.03122 14.9239C8.10481 14.3941 8.31122 14.033 8.54002 13.8282C6.76402 13.621 4.896 12.9168 4.896 9.77384C4.896 8.87877 5.208 8.14588 5.7192 7.57263C5.6368 7.36544 5.36241 6.531 5.79759 5.40254C5.79759 5.40254 6.46959 5.18143 7.99759 6.24272C8.59777 6.06848 9.28719 5.96782 9.99941 5.96674C10.6794 5.97002 11.364 6.06092 12.0032 6.24272C13.5304 5.18143 14.2008 5.40171 14.2008 5.40171C14.6376 6.53097 14.3624 7.36543 14.2808 7.5726C14.7928 8.14583 15.1032 8.87874 15.1032 9.7738C15.1032 12.9249 13.232 13.6185 11.4504 13.8216C11.7376 14.0747 11.9928 14.575 11.9928 15.3407C11.9928 16.4364 11.9832 17.3216 11.9832 17.5902C11.9832 17.8097 12.1272 18.0652 12.5336 17.9849C15.7378 16.8608 18 13.8039 18 10.2062C18 10.2051 18 10.2039 18 10.2027C18 5.67175 14.4176 2 10 2Z"
                fill="currentColor"
              ></path>
            </svg>
            <div class="absolute top-10 px-3 h-8 !leading-8 bg-black/80 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
              <span
                class="block absolute text-black/80"
                style="top: -4px; left: 50%; margin-left: -4.5px; width: 9px; height: 4px;"
              >
                <svg
                  class="absolute"
                  width="9"
                  height="4"
                  viewBox="0 0 9 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.83564 0.590546C4.21452 0.253758 4.78548 0.253758 5.16436 0.590546L9 4H0L3.83564 0.590546Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              GitHub
            </div>
          </a>
          <a
            class="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-600/10 dark:bg-gray-400/10 text-gray-700 dark:text-gray-400 hover:bg-gray-600/15 dark:hover:bg-gray-400/15 hover:text-black dark:hover:text-white transition-colors group"
            href="https://twitter.com/chance_smith"
            rel=""
            target="_self"
          >
            <svg
              class="inline-block w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0005 5.02869C17.4116 5.29638 16.7768 5.47229 16.119 5.55642C16.7921 5.15106 17.3122 4.50861 17.5569 3.73615C16.9221 4.11856 16.2185 4.38624 15.4766 4.53921C14.8724 3.88146 14.0234 3.49905 13.0598 3.49905C11.2624 3.49905 9.79399 4.96751 9.79399 6.78013C9.79399 7.04016 9.82458 7.29255 9.87812 7.52965C7.15536 7.39198 4.73089 6.08414 3.11712 4.10326C2.83414 4.5851 2.67353 5.15106 2.67353 5.74762C2.67353 6.8872 3.24714 7.89676 4.13433 8.47037C3.59131 8.47037 3.08653 8.31741 2.64294 8.08797V8.11091C2.64294 9.70173 3.77487 11.0325 5.27391 11.3308C4.79263 11.4625 4.28737 11.4808 3.79781 11.3843C4.00554 12.0363 4.41237 12.6068 4.96111 13.0156C5.50985 13.4244 6.17291 13.651 6.85709 13.6635C5.69734 14.5816 4.25976 15.0779 2.7806 15.0708C2.52056 15.0708 2.26053 15.0555 2.00049 15.0249C3.45364 15.9579 5.18213 16.501 7.03299 16.501C13.0598 16.501 16.3714 11.4991 16.3714 7.16253C16.3714 7.01722 16.3714 6.87955 16.3638 6.73424C17.0062 6.27534 17.5569 5.69408 18.0005 5.02869Z"
                fill="currentColor"
              ></path>
            </svg>
            <div class="absolute top-10 px-3 h-8 !leading-8 bg-black/80 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
              <span
                class="block absolute text-black/80"
                style="top: -4px; left: 50%; margin-left: -4.5px; width: 9px; height: 4px;"
              >
                <svg
                  class="absolute"
                  width="9"
                  height="4"
                  viewBox="0 0 9 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.83564 0.590546C4.21452 0.253758 4.78548 0.253758 5.16436 0.590546L9 4H0L3.83564 0.590546Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Twitter
            </div>
          </a>
        </nav>
      </div>
    </header>
  ),
  // section: (post: Post) => (
  //   <section>Your custom section with access to Post props.</section>
  // ),
  footer: (
    <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
      <p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
        <span>Smith Consulting LLC. </span>
        <a
          href="/feed"
          class="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          title="Atom Feed"
        >
          <svg
            class="inline-block w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
            <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
          </svg>{" "}
          RSS
        </a>
      </p>
    </footer>
  ),
  links: [
    { title: "GitHub", url: "https://github.com/chancesmith" },
    { title: "Twitter", url: "https://twitter.com/chance_smith" },
  ],
  avatar: "./assets/chance-smith.png",
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
