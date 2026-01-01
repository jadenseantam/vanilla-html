const inputEl = document.getElementById("input")
const infoTextEl = document.getElementById("info-text")
const meaningContainerEl = document.getElementById("meaning-container")
const titleEl = document.getElementById("title")
const meaningEl = document.getElementById("meaning")
const audioEL = document.getElementById("audio")
const enterBtn = document.querySelector(".enter-btn")

async function fetchAPI(word) {
    try {
        infoTextEl.style.display = "block"
        meaningContainerEl.style.display = "none"
        infoTextEl.innerText = `Searching the meaning of the word: "${word}"...`

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=>res.json())

        if (result.title) {
            meaningContainerEl.style.display = "block"
            infoTextEl.style.display = "none"
            titleEl.innerText = word
            meaningEl.innerText = "N/A"
            audioEL.style.display = "none"
        } else {
            infoTextEl.style.display = "none"
            meaningContainerEl.style.display = "block"

            audioEL.style.display = "inline-flex"

            titleEl.innerText = result[0].word
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition
            audioEL.src = result[0].phonetics[0].audio
        }  
    } catch (error) {
        console.log(error);
        infoTextEl.innerText = "An error occured. Try again later. "
    }
};

inputEl.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }; 
});

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        const value = inputEl.value && inputEl.value.trim();
        if (value) fetchAPI(value);
    });
}




// });