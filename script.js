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

let pressOperator = document.querySelector('.op')

input.textContent = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

one.addEventListener('click', () => {
    input.textContent += '1';

});
two.addEventListener('click', () => {

});
three.addEventListener('click', () => {

});

four.addEventListener('click', () => {

});
five.addEventListener('click', () => {

});
six.addEventListener('click', () => {

});
seven.addEventListener('click', () => {

});

eight.addEventListener('click', () => {
 
});
nine.addEventListener('click', () => {

});
zero.addEventListener('click', () => {

});
clear.addEventListener('click', () => {

});

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case 'plus':
            return add(a, b);
            break;
        case 'minus':
            return susbtract(a, b);
            break;
        case 'times':
            return multiply(a, b);
            break;
        case 'divide':
            return divide(a, b);
    } 
}






























