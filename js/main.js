


var storeQuote = [
   {
      quotes: "“Be yourself; everyone else is already taken.”",
      auther:" ― Oscar Wilde"
   },
   {
      quotes: "“So many books, so little time.",
      auther: "― Frank Zappa"
   },
   {
      quotes: "“A room without books is like a body without a soul.”",
      auther: "― Marcus Tullius Cicero"
   },
   {
      quotes: "“You only live once, but if you do it right, once is enough.”",
      auther: "― Mae West"
   },
   {
      quotes: "“Be the change that you wish to see in the world.”",
      auther: "― Mahatma Gandhi"
   },
   {
      quotes: "“To live is the rarest thing in the world. Most people exist, that is all.”",
      auther: "― Oscar Wilde"
   },
]

var quotes = document.getElementById("quotes");
var auther = document.getElementById("auther");

function getQuote() {



   var number = Math.floor(Math.random() * storeQuote.length);


   quotes.innerHTML = storeQuote[number].quotes;
   auther.innerHTML =  storeQuote[number].auther;
   

}























// auther.innerHTML = '<span>--</span>' + storeQuote[number] + auther;
// quotes.innerHTML = '<span>"</span>' + storeQuote[number] + quotes + '<span>"</span>';