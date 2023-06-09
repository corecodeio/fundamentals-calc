// -------------------------------------------- display
const display = document.querySelector('.display');

const setDisplayValue = (value) => {
  display.innerHTML = value;
};

// -------------------------------------------- ac
const ac = document.querySelector('#ac');

const acHandler = () => {
  setDisplayValue(0);
};

ac.addEventListener('click', acHandler);

// -------------------------------------------- numbers
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const numberHandler = (n) => {
  setDisplayValue(n);
};

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

numbers.forEach((n, i) => {
  n.addEventListener('click', () => numberHandler(i));
});
