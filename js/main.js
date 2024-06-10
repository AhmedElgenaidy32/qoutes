

var quotes = [
  {
    name: "Messi",
    quote: "I am a best player in the world no one will not came such me"
  },
  {
    name: "Ronaldo",
    quote: "I have 5 ballon dor i am from portogal i played for real madread"
  },
  {
    name: "abo traica",
    quote: "you should have determination to achive your goals"
  },
  {
    name: "Ramos",
    quote: "I am from spain and played for many clups such madrid and leshpona"
  },
  {
    name: "Halland",
    quote: "I ilove play football at primer leage with my friends dy broyen and rodry"
  },
];


var lastIndex = -1;

function demo() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);
  lastIndex = randomIndex;

  var quote = quotes[randomIndex];
  document.getElementById('say').innerHTML = `" ${quote.quote}"`;
  document.getElementById('name').innerHTML = `" ${quote.name}"`;
}



















