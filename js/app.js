import {quotes} from './quote.js';
(function(){


    let changeQuoteButton = document.getElementById('changeQuote');
    let quoteText = document.getElementById('quote');
    let writerText = document.getElementById('writer');

    changeQuoteButton.addEventListener('click', changeQuote);

    function changeQuote(){
        let random = Math.floor(Math.random()*quotes.length);

        quoteText.textContent = quotes[random].quote;
        writerText.textContent = quotes[random].writer;
    }

})();