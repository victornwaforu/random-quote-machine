const quoteData = [
  { text: "“The purpose of our lives is to be happy.”", author: "Dalai Lama" },
  {
    text: "“Life is what happens when you’re busy making other plans.”",
    author: "John Lennon",
  },
  { text: "“Get busy living or get busy dying.”", author: "Stephen King" },
  {
    text: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West",
  },
  {
    text: "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”",
    author: "Thomas A. Edison",
  },
  {
    text: "“If you want to live a happy life, tie it to a goal, not to people or things.”",
    author: "Albert Einstein",
  },
  {
    text: "“Never let the fear of striking out keep you from playing the game.”",
    author: "Babe Ruth",
  },
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button id="new-quote" class="button" onClick={handleNewQuote}>
        New Quote
      </button>
      <a
        href="https://www.twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
      >
        Tweet
      </a>
    </div>
  </div>
);

const getRandomIndex = () =>
  Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };
  return (
    <div class="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
