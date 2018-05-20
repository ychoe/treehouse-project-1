//declared variables
var getQuote;
var printBox;
var rgb = '';
var autoQuote;


// array of the quotes variable containing the different properties of each quote
var quotes = [
  {
    quote: 'Actually, Nappa, I have something far more grand in mind. Now tell me, how does the idea of eternal life sound to you',
    source: 'Vegeta',
    citation: 'Dragon Ball Z',
    year: 1996,
    tags: ['Comedy', 'Martial Arts', 'Shonen Jump', 'Animation']
  },
  {
    quote: 'Yeah, I bet. So you can add another head over your mantle right?',
    source: 'Goku'
  },
  {
    quote: 'I don\'t know which hurts worse...the lousy power rating or the commentary that goes with it.',
    source: 'Master Roshi'
  },
  {
    quote: 'Kuwabara, come back! You\'re like an ugly singer with a good voice, best for backup!',
    source: 'Yusuke'
  },
  {
    quote: 'Urameshi, I\'m gonna mess your face up so bad that kittens won\'t even look at you.',
    source: 'Kuwabura'
  },
  {
    quote: 'Kurama, do not make me come over there and remove that precious thing you call a voice box.',
    source: 'Hiei',
    citation: 'Yu Yu Hakusho',
    year: 2002,
    tags: ['Comedy', 'Action', 'Shonen Jump', 'Animation']
  },
  {
    quote: 'Nerd violence...',
    source: 'Kurama'
  },
  {
    quote: 'Thanks for the real vote of confidence. You two should be cheerleaders, you\'d look cute in skirts!',
    source: 'Genkai'
  },
  {
    quote: 'Krillin! You have a crush on Android 18, don\'t you!?',
    source: 'Gohan'
  }
];

//function to create a random number with high and low as the parameters 
function randomNumber(high, low) {
  return Math.floor(Math.random() * high) + low;


  //function to randomize the color of the background
  function randomColor() {
    rgb = 'rgb(' + randomNumber(255, 0) + ',' + randomNumber(255, 0) + ',' + randomNumber(255, 0) + ')';
    document.body.style.backgroundColor = rgb;
  };

  //function to get a random quote from the quotes array
  function getRandomQuote() {
    return quotes[randomNumber(quotes.length, 0)];
  };

  //function to print a quote from the quotes array
  function printQuote() {
    clearInterval(autoQuote);
    autoQuote = setInterval(printQuote, 30000);

    getQuote = getRandomQuote();
    printBox = '<p class=\'quote\'>' + getQuote.quote + '</p>';
    printBox += '<p class=\'source\'>' + getQuote.source;

    if (getQuote.citation) {
      printBox += '<span class=\'citation\'>' + getQuote.citation + '</span>';
    }

    if (getQuote.year) {
      printBox += '<span class=\'year\'>' + getQuote.year + ',' + '</span>';
    }

    if (getQuote.tags) {
      printBox += '<span class=\'tags\'>' + ' ' + getQuote.tags.join(', ') + '</span>';
    }

    printBox += '</p>';
    document.getElementById('quote-box').innerHTML = printBox;
    randomColor();
  };

  // event listener to respond to "Show another quote" button clicks
  // when user clicks anywhere on the button, the "printQuote" function is called
  document.getElementById("loadQuote").addEventListener("click", printQuote);

  printQuote();