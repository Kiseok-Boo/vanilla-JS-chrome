const quotes = [
  {
    quote:
      "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
    author: "Jim Rohn",
  },
  {
    quote: "I never lose. I either win or learn.",
    author: "Nelson Mandela",
  },
  {
    quote: "I was never less alone than when by myself.",
    author: "Edward Gibbon",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Pain past is pleasure.",
    author: "Unknown",
  },
  {
    quote:
      "Try to live every day as if you've deliberately come back to this one day.",
    author: "About Time",
  },
  {
    quote:
      "If you can concentrate always on the present, you'll be a happy man.",
    author: "Paulo Coelho",
  },
  {
    quote: "Nothing is a waste of time if you use the experience wisely.",
    author: "Auguste-René Rodin",
  },
  {
    quote: "Don't take your parents for granted.",
    author: "Unknown",
  },
  {
    quote: "It's choice not chance that determines your destiny.",
    author: "Jean Nidetch",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
