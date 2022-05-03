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
let times = document.querySelector('.times');
let divide = document.querySelector('.divide');
let equal = document.querySelector('.equal')

input.textContent = '';
let firstNumber = '';
let secondNumber = '';
let operator = null;
let numArray = [];


one.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // } // this makes it so that if there is a secondNumber (usually after user presses equal) 
    //the textContent will clear and give place to a new calculation (what happens w/ real calculator)

    input.textContent += '1';
});

two.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '2';
});

three.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '3';
});

four.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '4';
});

five.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '5';
});

six.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '6';
});

seven.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '7';
});

eight.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '8';
});

nine.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '9';
});

zero.addEventListener('click', () => {
    // if(secondNumber !== '') {
    //     input.textContent = '';
    // }
    input.textContent += '0';
});

clear.addEventListener('click', () => {
    input.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = null;
    numArray = [];
});

equal.addEventListener('click', () => {
    secondNumber = (input.textContent); // second number stored after user presses equal
    let answer = operate(operator, firstNumber, secondNumber); // takes the operator pressed before with the two numbers and does the calculations
    input.textContent = answer;
    firstNumber = ''; //this makes it so that the firstNumber is deleted after the operation, so if user presses equal again, only secondNumber is processed
    numArray = [];
});

plus.addEventListener('click', () => {
    firstNumber = (input.textContent); 
    arrayMagic();
    operator = 'plus'; 
    input.textContent = ''; 
});

minus.addEventListener('click', () => {
    firstNumber = (input.textContent); 
    arrayMagic();
    operator = 'minus'; 
    input.textContent = ''; 
});

divide.addEventListener('click', () => {
    firstNumber = (input.textContent); 
    arrayMagic();
    operator = 'divide'; 
    input.textContent = ''; 
});

times.addEventListener('click', () => {
    firstNumber = (input.textContent); 
    arrayMagic();
    operator = 'times'; 
    input.textContent = ''; 
});

// adding these functions was key, in this case we can set firstNumber & secondNumber as a & b 
// which i didnt realize before coding my first attempt at this calculator
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function division(a, b) {
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
            return substract(a, b);
            break;
        case 'times':
            return multiply(a, b);
            break;
        case 'divide':
            return division(a, b);
        default:
            return null;
    } 
}

function arrayMagic() { // this is so we can do operations on more than a pair of number at a time :)
    numArray.push(firstNumber);
    if (numArray.length == 2) {
        let numberOne = Number(numArray[0]);
        let numberTwo = Number(numArray[1]);
        if (operator == 'plus') {
            numArray = [add(numberOne, numberTwo)];
            firstNumber = Number(numArray);
        } else if (operator == 'minus') {
            numArray = [substract(numberOne, numberTwo)];
            firstNumber = Number(numArray);
        } else if (operator == 'times') {
            numArray = [multiply(numberOne, numberTwo)]; 
            firstNumber = Number(numArray);
        } else if (operator == 'divide') {
            numArray = [division(numberOne, numberTwo)];
            firstNumber = Number(numArray);
        } else {
            return;
        }
    }
}
     






























