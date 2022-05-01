let input = document.querySelector('.number');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight= document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');

let clear = document.querySelector('.clear');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let times = document.querySelector('.time');
let divide = document.querySelector('.divide');
let equal = document.querySelector('.equal')


let stringNum = '';
let operator = '';
let firstNum = 0;
let secondNum = 0;

one.addEventListener('click', () => {
    stringNum += '1';
    input.textContent = stringNum;
});
two.addEventListener('click', () => {
    stringNum += '2';
    input.textContent = stringNum;
});
three.addEventListener('click', () => {
    stringNum += '3';
    input.textContent = stringNum;
});

four.addEventListener('click', () => {
    stringNum += '4';
    input.textContent = stringNum;
});
five.addEventListener('click', () => {
    stringNum += '5';
    input.textContent = stringNum;
});
six.addEventListener('click', () => {
    stringNum += '6';
    input.textContent = stringNum;
});
seven.addEventListener('click', () => {
    stringNum += '7';
    input.textContent = stringNum;
});

eight.addEventListener('click', () => {
    stringNum += '8';
    input.textContent = stringNum;
});
nine.addEventListener('click', () => {
    stringNum += '9';
    input.textContent = stringNum;
});
zero.addEventListener('click', () => {
    stringNum += '0';
    input.textContent = stringNum;
});
clear.addEventListener('click', () => {
    input.textContent = '';
    stringNum = '';
    firstNum = 0;
    secondNum = 0;
});

plus.addEventListener('click', () => {
    operator = 'plus';
    firstNum = Number(stringNum);
    stringNum = '';
    input.textContent = '';
});

equal.addEventListener('click', () => {
    secondNum = Number(stringNum);
    stringNum = '';
    if (operator == 'plus') {
        add();

    }
})

let add = function() {
    let answer = firstNum + secondNum;
    input.textContent = answer;
}










