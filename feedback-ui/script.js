const ratingEls = document.querySelectorAll('.rating');
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');

let selectedRating = ""

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener('click', (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add('active');
        event.target.parentNode.classList.add('active');
    });
});

btnEl.addEventListener('click', () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `
            <h1><strong>Thank you!</strong></h1>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <p>We will use your feedback to improve our customer support. </p>
            `
    };
})

const removeActive = () => {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active');
    });
}