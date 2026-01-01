const selectorEl = document.getElementById("selector")
const outputEl = document.getElementById("output")
const submitEl = document.getElementById("submit")

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

selectorEl.addEventListener('change', () => { 
    if (selectorEl.value !== "default") {
        outputEl.textContent = getRandom(Number(selectorEl.value))
    } else {
        outputEl.textContent = "Please select a number. "
    }
});
