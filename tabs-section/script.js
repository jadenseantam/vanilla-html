const tab1btn = document.getElementById("1");
const tab2btn = document.getElementById("2");
const tab3btn = document.getElementById("3");

const tab1content = document.getElementById("1c");
const tab2content = document.getElementById("2c");
const tab3content = document.getElementById("3c");
// Initially show Tab 1 content
tab1content.style.display = "block";
tab2content.style.display = "none";
tab3content.style.display = "none";

tab1btn.addEventListener('click', () => {
    tab1content.style.display = "block";
    tab2content.style.display = "none";
    tab3content.style.display = "none";
});
tab2btn.addEventListener('click', () => {
    tab1content.style.display = "none";
    tab2content.style.display = "block";
    tab3content.style.display = "none";
});
tab3btn.addEventListener('click', () => {
    tab1content.style.display = "none";
    tab2content.style.display = "none";
    tab3content.style.display = "block";
});