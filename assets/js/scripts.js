const BASE_URL = 'https://api.kanye.rest/';

function replaceBadWord(quote, badWord) {
    let re = new RegExp(badWord, "g");
    let newQuote = quote.replace(re, '****');
    return newQuote;
}

function checkQuote(quote) {
    const badWords = ['shit', 'fuck', 'porn', 'sex'];

    for (let badWord of badWords) {
        if (quote.includes(badWord)) {
            quote = replaceBadWord(quote, badWord);
            console.log(quote);
            alert('');
        }
    }

    return quote;
}

const getQuote = async() => {
    const data = await fetch(BASE_URL)
    .then(res=>res.json())
    .catch(e=>console.log(e));
    
    const quote = checkQuote(data.quote);

    return `"${quote}" - Kanye West`;
}

const loadQuote = async() => {
    const campo = document.querySelector('.kanye-quote');
    campo.textContent = await getQuote();
}

loadQuote();