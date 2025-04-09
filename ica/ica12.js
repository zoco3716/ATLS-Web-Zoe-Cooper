var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);

var endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

var answerBtn = document.querySelector('#js-tweet').addEventListener('click',displayAnswer);

let current = {
    question: "", answer: ""
};

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayQuote(json.question);

        current.question = json.question;
        current.answer = json.answer;

        //var answerBtn = document.querySelector('#js-tweet').addEventListener('click',displayAnswer(json.answer));
    }

    catch(err) {
        console.log(err);
        alert('Fail');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer(answer) {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

getQuote();