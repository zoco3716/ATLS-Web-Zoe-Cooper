var endpoint = "https://rickandmortyapi.com/api/character/";

var newBtn = document.querySelector('#js-new-quote');
newBtn.addEventListener('click', getQuote);

var answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', function() {
    displayAnswer(current.answer);
});

let current = {
    question: "", answer: ""
};

async function getQuote() {
    try {
        const randomId = Math.floor(Math.random() * 826) + 1;
        const response = await fetch(endpoint + randomId);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();

        displayQuote(json.name);

        current.question = json.name;
        current.answer = json.image;
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

function displayAnswer(imageUrl) {
    const answerContainer = document.querySelector('#js-answer-text');
    answerContainer.innerHTML = ''; 

    const img = document.createElement('img');
    img.src = imageUrl;
    answerContainer.appendChild(img);
}

getQuote();
