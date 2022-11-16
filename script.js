// calculator functions

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function addition(num1, num2) {
    let ans = num1 + num2;
    return round(ans, 6);
}

function subtraction(num1, num2) {
    let ans = num1 - num2;
    return round(ans, 6);
}

function multiplication(num1, num2) {
    let ans = num1 * num2;
    return round(ans, 6);
}

function division(num1, num2) {
    let ans = num1 / num2;
    return round(ans, 6);
}

function operate(num1, num2, func) {
    return window[func](num1, num2);
}

console.log(/[.]/.test('025'))
// DOM JS
const currDisplay = document.querySelector('.current-display');
const prevDisplay = document.querySelector('.prev-display');
const clear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('.equals');

function hasDecimal(num) {
    if (num % 1 !== 0) return true;
    return false;
}

let displayVal = '';
let prevDisplayVal = '';
let num1 = 0;
let num2;

let currOperation = '';
let prevOperation = '';

let setOperation = (opVal) => {
    if (opVal === 'addition') return ' &#43 ';
    if (opVal === 'subtraction') return ' &#8722 ';
    if (opVal === 'multiplication') return ' &#215 ';
    if (opVal === 'division') return ' &#247 ';
}

let secondNum = false;
let isNewNum = false;
let isEquals = false;

numbers.forEach(num => num.addEventListener('click', () => {
    if (secondNum === true) {
        currDisplay.textContent = '';
        secondNum = false;
    }
    if (currDisplay.textContent === '0' && num.value != '.') {
        currDisplay.textContent = '';
    }
    if (currDisplay.textContent.length < 13 && num.value != '.') {
        currDisplay.textContent += num.value;
    }
    if (num.value === '.' && !(/[.]/.test(currDisplay.textContent))) {
        currDisplay.textContent += num.value
    }
}));

operators.forEach(op => op.addEventListener('click', () => {
    if (isNewNum && secondNum === false) {
        num2 = parseFloat(currDisplay.textContent);
        currDisplay.textContent = operate(num1, num2, currOperation);
        num1 = currDisplay.textContent;
        isNewNum = false;
    }
    num1 = parseFloat(currDisplay.textContent);
    currOperation = op.value;
    prevDisplay.innerHTML = num1 + setOperation(currOperation);
    secondNum = true;
    isNewNum = true;
    isEquals = false;
}));

equals.addEventListener('click', () => {
    if (isEquals === false) {
        num2 = parseFloat(currDisplay.textContent);
        currDisplay.textContent = operate(num1, num2, currOperation);
        prevDisplay.innerHTML = num1 + setOperation(currOperation) + num2 + ' = ';
        num1 = operate(num1, num2, currOperation);
        isEquals = true;
        isNewNum = false;
    }
});

clear.addEventListener('click', () => {
    secondNum = false;
    isEquals = false;
    isNewNum = false;
    prevDisplayVal = '';
    num1 = 0;
    num2 = 0;
    currDisplay.textContent = '0';
    prevDisplay.textContent = '';
});

deleteNum.addEventListener('click', () => {
    console.log(isNewNum, secondNum, isEquals);
    if (isNewNum === false && secondNum === false && isEquals === false)
    currDisplay.textContent = currDisplay.textContent.substring(0, currDisplay.textContent.length - 1);
});