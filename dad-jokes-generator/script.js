const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke'); 

const apiKey = "nfce5KlEA+17KVSmCLhVSA==V5R186bvCx54SRaD"

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
};

const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes';

const getJoke = async () => {

    try {
        jokeEl.innerText = "Loading...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.textContent = data[0].joke;
    } catch (error) {
        jokeEl.textContent = "An error occurred. Please try again later.";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }


}

btnEl.addEventListener('click', getJoke);