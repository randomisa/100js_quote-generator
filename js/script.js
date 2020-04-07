

/*****************************
 * VARIABLES
 ****************************/

const bodyElement = document.querySelector("body");
const container = document.querySelector(".container");
const quoteContainer = document.querySelector(".quote-container");
const quoteText_text = document.querySelector(".quote-text .text");
const quoteText_span = document.querySelector(".quote-text .text span");
const quotedBy = document.querySelector(".quoted-by");
const btnNewQuote = document.querySelector(".button");

// console.dir(quoteSVG);


// document.querySelector(".quote-text .text").innerText = "this is working";

function PropertiesForQuotes(componentbgColor, textColor, textSVGColor, quotedByThisPerson, quoteText) {
    this.componentbgColor = componentbgColor; 
    
    this.bgDarkColor = "hsl(" + componentbgColor + ", 73%, 19%)"
    this.bgMiddleColor = "hsl(" + componentbgColor + ", 54%, 30%)";
    this.buttonLightColor = "hsl(" + componentbgColor + ", 29%, 51%)";
    this.buttonHoverColor = "hsl(" + componentbgColor + ", 54%, 30%)";
    this.quotedByTextColor = "hsl(" + componentbgColor + ", 35%, 61%)";

    this.textColor = textColor;
    this.textSVGColor = textSVGColor;
    this.quotedByThisPerson = quotedByThisPerson;
    this.quoteText = quoteText;

    // https://www.w3schools.com/colors/colors_hsl.asp
};

const quoteProperties = {
quote1: new PropertiesForQuotes("266",  "#d0d0d0", "#ababab", "Confucius", "It does not matter how slowly you go as long as you do not stop."),
quote2: new PropertiesForQuotes("136",  "#d0d0d0", "#ababab", "Theodore Roosevelt", "Believe you can and you're halfway there."),
quote3: new PropertiesForQuotes("0",  "#d0d0d0", "#ababab", "William Shakespeare", "We know what we are, but know not what we may be."),
quote4: new PropertiesForQuotes("242",  "#d0d0d0", "#ababab", "Buddha", "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."),
quote5: new PropertiesForQuotes("324",  "#d0d0d0", "#ababab", "Eleanor Roosevelt", "You must do the things you think you cannot do."),
quote6: new PropertiesForQuotes("20",  "#d0d0d0", "#ababab", "Dennis P. Kimbro", "Life is 10% what happens to us and 90% how we react to it."),
quote7: new PropertiesForQuotes("40",  "#d0d0d0", "#ababab", "Josiah Gilbert Holland", "There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures."),
quote8: new PropertiesForQuotes("60",  "#d0d0d0", "#ababab", "William James", "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact."),
quote9: new PropertiesForQuotes("80",  "#d0d0d0", "#ababab", "Will Rogers", "The quickest way to double your money is to fold it over and put it back in your pocket."),
quote10: new PropertiesForQuotes("100",  "#d0d0d0", "#ababab", "Will Rogers", "Even if you’re on the right track, you’ll get run over if you just sit there."),
quote11: new PropertiesForQuotes("120",  "#d0d0d0", "#ababab", "Sydney Harris", "When I hear somebody sigh, ‘Life is hard,’ I am always tempted to ask, ‘Compared to what?"),
quote12: new PropertiesForQuotes("140",  "#d0d0d0", "#ababab", "Benjamin Disraeli", "Nurture your mind with great thoughts. To believe in the heroic makes heroes."),
quote13: new PropertiesForQuotes("160",  "#d0d0d0", "#ababab", "Mahatma Gandhi", "Look at the sparrows; they do not know what they will do in the next moment. Let us literally live from moment to moment."),
quote14: new PropertiesForQuotes("180",  "#d0d0d0", "#ababab", "Lao Tzu", "When I let go of what I am, I become what I might be."),
quote15: new PropertiesForQuotes("200",  "#d0d0d0", "#ababab", "Winston Churchill", "Courage is the first of human qualities because it is the quality which guarantees all others."),
quote16: new PropertiesForQuotes("220",  "#d0d0d0", "#ababab", "Oliver Wendell Holmes", "The great thing in this world is not so much where you stand, as in what direction you are moving."),
quote17: new PropertiesForQuotes("240",  "#d0d0d0", "#ababab", "Johann Wolfgang Von Goethe", "Live each day as if your life had just begun."),
quote18: new PropertiesForQuotes("260",  "#d0d0d0", "#ababab", "Vince Lombardi", "The difference between a successful person and others is not lack of strength not a lack of knowledge but rather a lack of will."),
quote19: new PropertiesForQuotes("280",  "#d0d0d0", "#ababab", "Jim Rohn", "Either you run the day, or the day runs you."),
quote20: new PropertiesForQuotes("300",  "#d0d0d0", "#ababab", "John F. Kennedy", "If not us, who? If not now, when?"),
quote21: new PropertiesForQuotes("320",  "#d0d0d0", "#ababab", "William Shakespeare", "Speak less than you know; have more than you show."),
quote22: new PropertiesForQuotes("340",  "#d0d0d0", "#ababab", "Winston Churchill", "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty."),
quote23: new PropertiesForQuotes("350",  "#d0d0d0", "#ababab", "Les Brown", "Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else."),
quote24: new PropertiesForQuotes("330",  "#d0d0d0", "#ababab", "Steve Jobs", "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you."),
quote25: new PropertiesForQuotes("310",  "#d0d0d0", "#ababab", "Joshua J. Marine", "Challenges are what make life interesting and overcoming them is what makes life meaningful."),
quote26: new PropertiesForQuotes("290",  "#d0d0d0", "#ababab", "Steve Jobs / Rob Siltanen", " People who are crazy enough to think they can change the world, are the ones who do."),
quote27: new PropertiesForQuotes("270",  "#d0d0d0", "#ababab", "Dr. Henry Link", "We generate fears while we sit. We overcome them by action."),
quote28: new PropertiesForQuotes("250",  "#d0d0d0", "#ababab", "Dr. Seuss", "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind. "),
quote29: new PropertiesForQuotes("230",  "#d0d0d0", "#ababab", "Harvey Fierstein", "Accept no one’s definition of your life; define yourself."),
quote30: new PropertiesForQuotes("210",  "#d0d0d0", "#ababab", "Eleanor Roosevelt", "No one can make you feel inferior without your consent."),
quote31: new PropertiesForQuotes("190",  "#d0d0d0", "#ababab", "James Cameron", "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success."),
quote32: new PropertiesForQuotes("170",  "#d0d0d0", "#ababab", "Gerard Way", "One day your life will flash before your eyes. Make sure it’s worth watching."),
quote33: new PropertiesForQuotes("150",  "#d0d0d0", "#ababab", "Johnny Depp", "One day the people that don’t even believe in you will tell everyone how they met you."),
quote34: new PropertiesForQuotes("130",  "#d0d0d0", "#ababab", "Buddha", "What we think, we become."),
quote35: new PropertiesForQuotes("110",  "#d0d0d0", "#ababab", "Mark Twain", "If you tell the truth you don’t have to remember anything."),
quote36: new PropertiesForQuotes("90",  "#d0d0d0", "#ababab", "Tyga", "Hate comes from intimidation, love comes from appreciation."),
quote37: new PropertiesForQuotes("70",  "#d0d0d0", "#ababab", "Steve Martin", "Be so good they can’t ignore you."),
quote38: new PropertiesForQuotes("50",  "#d0d0d0", "#ababab", "Drake", "Never let your emotions overpower your intelligence."),
quote39: new PropertiesForQuotes("30",  "#d0d0d0", "#ababab", " Thomas Edison", "There is no substitute for hard work."),
quote40: new PropertiesForQuotes("10",  "#d0d0d0", "#ababab", "Nelson Mandela", "May your choices reflect your hopes, not your fears."),

};


const quotePropertiesArray = Object.values(quoteProperties);

console.log(quotePropertiesArray[0]);


btnNewQuote.addEventListener("click", function() {
    
    const randomQuote = quotePropertiesArray[Math.floor(Math.random() * quotePropertiesArray.length)]

    console.log(randomQuote);

    generateQuotesProperties(randomQuote);
});



function generateQuotesProperties(quoteNumber) {

    // Colors
    bodyElement.style.backgroundColor = quoteNumber.bgDarkColor;
    quoteContainer.style.backgroundColor = quoteNumber.bgMiddleColor;
    btnNewQuote.style.backgroundColor = quoteNumber.buttonLightColor;
    quoteText_text.style.color = quoteNumber.textSVGColor;
    quoteText_span.style.color = quoteNumber.textColor;
    quotedBy.style.color = quoteNumber.quotedByTextColor;

    // Text
    quoteText_span.innerHTML = quoteNumber.quoteText;
    quotedBy.innerHTML = "- " + quoteNumber.quotedByThisPerson;




    console.log("hello");
    
};




// console.log(quotePropertiesArray);

// const button = document.querySelector(".button");

// button.addEventListener("click", function() {

//     // const randomColors = items[Math.floor(Math.random() * )]
//     // '#'+Math.floor(Math.random()*16777215).toString(16);

//     // document.body.style.backgroundColor = randomColors;
//     console.log("hello");
// });