const QUOTES = [
  {
    quote:
      "Maybe there’s only a dark road up ahead. But you still have to believe and keep going. Believe that the stars will light your path, even a little bit.",
    author: "-Kaori Miyazono",
  },
  {
    quote:
      "Isn’t it funny how the most unforgettable scenes can be so trivial?",
    author: "-Kousei Arima",
  },
  {
    quote:
      "You will never be able to love anybody else until you love yourself.",
    author: "-Lelouch Lamperouge",
  },
  {
    quote:
      "Destiny. Fate. Dreams. These unstoppable ideas are held deep in the heart of man. As long as there are people who seek freedom in this life, these things shall not vanish from the Earth.",
    author: "-Gold D. Rodger",
  },
  {
    quote:
      "People, who can’t throw something important away, can never hope to change anything.",
    author: "-Armin Arlert",
  },
  {
    quote:
      "Was I able to live inside someone’s heart? Was I able to live inside your heart? Do you think you’ll remember me at least a little? You’d better not hit ‘reset!’ Don’t forget me, OK? That’s a promise, OK? I’m glad it’s you, after all. Will I reach you? I hope I can reach you.",
    author: "-Kaori Miyazono",
  },
  {
    quote:
      "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
    author: "-Roy Mustang",
  },
  {
    quote:
      "Forgetting is like a wound. The wound may heal but it has already left a scar.",
    author: "-Monkey D Luffy",
  },
];
window.onload = initialize;
function initialize() {
  newQuote();
}
function newQuote() {
  let quoteSize = QUOTES.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteText = QUOTES[randomIndex];
  let quoteInApiFormat = encodeURIComponent(`"${randomQuoteText.quote}"`);
  let authorInApiFormat = encodeURIComponent(` ${randomQuoteText.author}`);
  let elem = document.getElementById("changeText");

  let twitterRef =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
  twitterRef += quoteInApiFormat;
  twitterRef += authorInApiFormat;
  document.getElementById("text").innerText = randomQuoteText.quote;
  document.getElementById("author").innerText = randomQuoteText.author;
  document.getElementById("tweet-quote").href = twitterRef;
}
