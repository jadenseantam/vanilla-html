const outputEl = document.getElementById("output");
const clearEl = document.getElementById("AC");
const sevenEl = document.getElementById("7");
const eightEl = document.getElementById("8");
const nineEl = document.getElementById("9");
const divideEl = document.getElementById("divide");
const fourEl = document.getElementById("4");
const fiveEl = document.getElementById("5");
const sixEl = document.getElementById("6");
const multiplyEl = document.getElementById("multiply");
const oneEl = document.getElementById("1");
const twoEl = document.getElementById("2");
const threeEl = document.getElementById("3");
const minusEl = document.getElementById("minus");
const zeroEl = document.getElementById("0");
const plusEl = document.getElementById("plus");
const periodEl = document.getElementById("period")
const equalsEl = document.getElementById("equal");

const appendNumber = (value) => {
    outputEl.value += value;
};

const clear = () => {
    outputEl.value = "";
};

const calculate = () => {
    try {
        let ans = eval(outputEl.value);
        outputEl.value = ans
    } catch (error) {
        outputEl.value = "Error, Press AC to clear...";
    }
}

sevenEl.addEventListener("click", () => appendNumber('7'));
eightEl.addEventListener("click", () => appendNumber('8'));
nineEl.addEventListener("click", () => appendNumber('9'));
divideEl.addEventListener("click", () => appendNumber('/'));
fourEl.addEventListener("click", () => appendNumber('4'));
fiveEl.addEventListener("click", () => appendNumber('5'));
sixEl.addEventListener("click", () => appendNumber('6'));
multiplyEl.addEventListener("click", () => appendNumber('*'));
oneEl.addEventListener("click", () => appendNumber('1'));
twoEl.addEventListener("click", () => appendNumber('2'));
threeEl.addEventListener("click", () => appendNumber('3'));
minusEl.addEventListener("click", () => appendNumber('-'));
zeroEl.addEventListener("click", () => appendNumber('0'));
plusEl.addEventListener("click", () => appendNumber('+'));
periodEl.addEventListener("click", () => appendNumber("."))
clearEl.addEventListener('click', clear);
equalsEl.addEventListener('click', calculate);