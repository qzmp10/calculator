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

//variables
input.textContent = '';
let firstNumber = '';
let secondNumber = '';
let operator = null;
let numArray = [];
let pressedEqual = false;


one.addEventListener('click', () => {
    if(pressedEqual == true) { //if user previously pressed equal
        input.textContent = ''; //reset textContent
    }
    input.textContent += '1';
    pressedEqual = false; // user presses button, so pressedEqual = false;
});

two.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '2';
    pressedEqual = false;
});

three.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '3';
    pressedEqual = false;
});

four.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '4';
    pressedEqual = false;
});

five.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '5';
    pressedEqual = false;
});

six.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '6';
    pressedEqual = false;
});

seven.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '7';
    pressedEqual = false;
});

eight.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '8';
    pressedEqual = false;
});

nine.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '9';
    pressedEqual = false;
});

zero.addEventListener('click', () => {
    if(pressedEqual == true) { 
        input.textContent = '';
    }
    input.textContent += '0';
    pressedEqual = false;
});

clear.addEventListener('click', () => {
    input.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = null;
    numArray = [];
    pressedEqual = false;
});

equal.addEventListener('click', () => {
    pressedEqual = true;
    secondNumber = (input.textContent); 
    preventEqualSpam();
    let answer = operate(operator, firstNumber, secondNumber); 
    input.textContent = answer;
    firstNumber = '';
    numArray = [];
});

plus.addEventListener('click', () => {
    firstNumber = (input.textContent); //sets firstNumber
    arrayMagic(); //IF array.length !== 2 -> skips this step, goes to next operator -> ('plus')
    // ELSE -> takes the previous operator and operates the two numbers in the array BEFORE moving on to the next operator
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

function arrayMagic() { // this is so we can do operations one pair of numbers at a time
    numArray.push(firstNumber); // pushes first number
    if (numArray.length == 2) { // if numArray length is more than 2, operate numbers in numArray & change firstNumber to operated numArray
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
            return; // if array length !== 2, move on to next operator
        }
    }
}

let preventEqualSpam = function() { 
    if(operator == 'divide' && firstNumber == '') {
        firstNumber = secondNumber;
        secondNumber = 1;
    } else if (operator == 'times' && firstNumber == '') {
        firstNumber = secondNumber;
        secondNumber = 1;
    } else if (operator == 'minus' && firstNumber == '') {
        firstNumber = secondNumber;
        secondNumber = ''   
    } else {
        return;
    }
} 
// we check if they divided or multiplied right before pressing equal again
// if they did, firstNumber is = '', so pressing equal would lead to 0 divided/multiplied by secondNumber
// we fix that by making sure that firstNumber = secondNumber & secondNumber = 1 if user previously multiplied/divided
// so pressing equal after those operations is gonna = the previous answer
// if user pressed minus before spamming equal, we wanna switch firstNumber and secondNumber as 0 - secondNumber is = -secondNumber
// not needed for add as 0 + secondNumber = secondNumber

     






























