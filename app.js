// ================================================== display
const display = document.querySelector('#display');

// ================================================== ac
const ac = document.querySelector('#ac');

// ================================================== sig
const sig = document.querySelector('#sig');

// ================================================== percent
const percent = document.querySelector('#percent');

// ================================================== decimal
const dot = document.querySelector('#dot');

// ================================================== numbers
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eighth = document.querySelector('#eighth');
const nine = document.querySelector('#nine');

const numbers = [zero, one, two, three, four, five, six, seven, eighth, nine];

const numberHandler = (n) => {
  const currentDisplay = display.innerHTML;
  let newDisplay = `${currentDisplay}${n}`;
  if (currentDisplay === '0') {
    newDisplay = n;
  }
  display.innerHTML = newDisplay;
};

numbers.forEach((n, i) => n.addEventListener('click', () => numberHandler(i)));
