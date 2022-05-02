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

//users constructs his number by adding numbers as strings
let stringNum = '';

//user chooses operator
let operator = '';

//storage variables for data
let num = 0;
let numArray = [];

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
    num = 0;
    operator = '';
    numArray = [];
});

plus.addEventListener('click', () => {
    //store operator value
    operator = 'plus';

    //convert stringnum to NUmber
    num = Number(stringNum);
    //store number in an array
    numArray.push(num);

    //clear stringnum & textcontent so user can input their other number
    stringNum = '';
    input.textContent = '';
});

equal.addEventListener('click', () => {
    //convert the final stringnum to a number
    num = Number(stringNum);

    //push final number to the number array
    numArray.push(num);

    //clear the stringnum
    stringNum = '';

    //calculate the total of the numbers in the array depending on the operator chosen beforehand
    if (operator == 'plus') {
        let answer = numArray.reduce((total, num) => {
            return total + num;
         }, 0); //theres a 0 because for substract and add, 0 is the initial value

         numArray = [answer]; //the answer becomes the only value in the number array so user could do more calculation after
         input.textContent = answer;
         operator = '';
    } 
});

//little bug -> after user presses equal, pressing a number before pressing the operator and then pressing equal 
//results the same as pressing the operator because the operator is still plus and the numArray is still [answer];
//FIND A SOLUTION

//DO AN OPERATE() FUNCTION TOO TO CLEAN UP CODE












