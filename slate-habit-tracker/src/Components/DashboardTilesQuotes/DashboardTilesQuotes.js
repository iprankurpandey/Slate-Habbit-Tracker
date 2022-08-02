function DashboardTilesQuotes() {
  const quotes = [
    {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra",
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln",
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer",
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu",
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg",
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle",
    },
    {
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra",
    },
    {
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
    },
    {
      text: "What you give is what you get.",
      author: "Byron Pulsifer",
    },
    {
      text: "We can only learn to love by loving.",
      author: "Iris Murdoch",
    },
    {
      text: "Life is change. Growth is optional. Choose wisely.",
      author: "Karen Clark",
    },
    {
      text: "You'll see it when you believe it.",
      author: "Wayne Dyer",
    },
    {
      text: "Today is the tomorrow we worried about yesterday.",
      author: "Narendra Modi",
    },
    {
      text: "It's easier to see the mistakes on someone else's paper.",
      author: "BR Ambedkar",
    },
    {
      text: "Every man dies. Not every man really lives.",
      author: `Swami Ramdev`,
    },
    {
      text: "To lead people walk behind them.",
      author: "Lao Tzu",
    },
    {
      text: "Having nothing, nothing can he lose.",
      author: "William Shakespeare",
    },
    {
      text: "Trouble is only opportunity in work clothes.",
      author: "Henry J. Kaiser",
    },
    {
      text: "A rolling stone gathers no moss.",
      author: "Publilius Syrus",
    },
    {
      text: "Ideas are the beginning points of all fortunes.",
      author: "Napoleon Hill",
    },
    {
      text: "Everything in life is luck.",
      author: "Donald Trump",
    },
    {
      text: "Doing nothing is better than being busy doing nothing.",
      author: "Lao Tzu",
    },
    {
      text: "Trust yourself. You know more than you think you do.",
      author: "Benjamin Spock",
    },
    {
      text: "Study the past, if you would divine the future.",
      author: "Confucius",
    },
    {
      text: "The day is already blessed, find peace within it.",
      author: "Elon Musk",
    },
    {
      text: "From error to error one discovers the entire truth.",
      author: "Sigmund Freud",
    },
    {
      text: "Well done is better than well said.",
      author: "Benjamin Franklin",
    },
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div>
      <div class="flex justify-center  h-96 w-96">
        <div class=" flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-200 shadow-lg">
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-2xl font-medium mb-2">Quotes </h5>
            <p class="text-gray-700 text-base mb-4">
              <div class="flex flex-col justify-center">
                <p class="text-blue-800 text-lg mb-4">{randomQuote.text}</p>
                <p class="text-blue-700 text-base mb-4 text-right">
                  {randomQuote.author} !
                </p>
              </div>
            </p>
            <p class="text-gray-600 text-sm">
              Last updated at {Date()} mins ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTilesQuotes;
