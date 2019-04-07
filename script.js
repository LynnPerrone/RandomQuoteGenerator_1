/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
  This program will randomly select a quote with author, and possibly a citation and a year, and print it to the screen.
  The pseudocode is written in 3 blocks
  ***/


  //  1. Create Quote Array  //

/*** 
  Create a variable to store quotes, named quotes.  Group the list of quotes in an array literal.  The object has two
  properties, quote and source. Some have three or four properties added, citation and year.
***/

var quotes = [
  {
    quote: "Don't be satisfied with stories, how things have gone with others.  Unfold your own myth.",
    source: "Rumi"
  },
  {
    quote: "Fall seven times and stand up eight",
    source: "Japanese Proverb"
  },
  {
    quote: "The earth has music for those who listen",
    source: "William Shakespeare"
  },
  {
    quote: "Do. Or do not. There is no try",
    source: "Yoda",
    citation: "Star Wars: The Empire Strikes Back",
    year: 1980
  },
  {
    quote: "Fear is the path to the dark side... fear leads to anger... anger leads to hate... hate leads to suffering.",
    source: "Yoda",
    citation: "Star Wars: The Phantom Menace",
    year: 1999
  },
  {
    quote: "Often when you think you're at the end of something, you're at the beginning of something else.",
    source: "Fred Rogers"
  } 
];

  //  2. Create the random selection code using getRandomQuote function  //

/*** Create a function called 'getRandomQuote.  Create a variable to store a random number to select a quote.  Use the 
 random number to 'return' a random quote object from the quotes array.  This function selects a quote number position
 from 0 to the last index number in the array.***/
  
function getRandomQuote( ) {
  var newQuote = Math.floor( Math.random() * quotes.length );
  // use 'newQuote' to 'grab' a random item from the quotes array. Return the random quote object from the array//
 return quotes[newQuote];
}

//  3. Create the 'printQuote' function.  A previous challenge -Student Search- helped inform my function, along with the template in the instructions:  //

//'display' calls the getRandomQuote function.//
//'message' will be the variable created for the HTML string, set to be empty//
// Create an HTML template to build HTML string. Include quote, source, citation, and year.//
//Set the `innerHTML` of the `quote-box` div to the HTML string.//

function printQuote() {
  var display = getRandomQuote();
  var message = ' ';
  message = '<p class = "quote">' + display.quote + '</p>';
  message += '<p class = "source">' + display.source + '</p>'
  if (display.citation) {
    message += '<span class = "citation">' + display.citation + '</span>';
  } else {
    message += ' ';
  }
  if (display.year) {
    message += '<span class = "year">' + display.year + '</span></p>';
  } else {
    message += ' ';
  }
  document.getElementById('quote-box').innerHTML = message;
}    
  
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

