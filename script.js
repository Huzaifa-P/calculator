// calculator functions
let addition = (num1, num2) => {
    return num1 + num2;
}

let subtraction = (num1, num2) => {
    return num1 - num2;
}

let multiplication = (num1, num2) => {
    return num1 * num2;
}

let divide = (num1, num2) => {
    return num1 / num2;
}


let operate = (num1, num2, func) => {
    let equals = func(num1, num2);
    return equals;
}

// DOM JS
const currDisplay = document.querySelector('.current-display');
const numbers = document.querySelectorAll('.numbers');
const clear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');

let displayVal = '';
let prevDisplay = '';
let num1 = 0;
let num2 = 0;

let secondNum = false;
let setSecond = () => {
    if (secondNum === false) return true;
    if (secondNum === true) return false;
}

numbers.forEach(num => num.addEventListener('click', () => {
    currDisplay.textContent = "";
    displayVal += num.value;
    currDisplay.textContent = displayVal;
    secondNum = setSecond();
}));

clear.addEventListener('click', () => {
    displayVal = '';
    prevDisplay = '';
    currDisplay.textContent = '0';
});

deleteNum.addEventListener('click', () => {
    displayVal = displayVal.substring(0, displayVal.length - 1);
    if (displayVal === '') currDisplay.textContent = 0;
    else currDisplay.textContent = displayVal;
});