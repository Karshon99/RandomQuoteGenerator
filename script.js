import { QUOTES } from "./QUOTES.js";

window.onload = function () {
  newQuote();
  const newQuoteButton = document.querySelector("#new-quote");
  console.log(newQuoteButton);
  newQuoteButton.addEventListener("click", newQuote);
};

function newQuote() {
  let fadeText = document.querySelector(".fade-in-text");
  fadeText.classList.add("hide");
  setTimeout(removeHide, 500);
}

function removeHide() {
  let quoteSize = QUOTES.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteText = QUOTES[randomIndex];
  let quoteInApiFormat = encodeURIComponent(`"${randomQuoteText.quote}"`);
  let authorInApiFormat = encodeURIComponent(` ${randomQuoteText.author}`);
  let twitterRef =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
  twitterRef += quoteInApiFormat;
  twitterRef += authorInApiFormat;
  document.getElementById("tweet-quote").href = twitterRef;
  document.querySelector(".fade-in-text").classList.remove("hide");
  document.getElementById("text").innerText = randomQuoteText.quote;
  document.getElementById("author").innerText = randomQuoteText.author;
}
