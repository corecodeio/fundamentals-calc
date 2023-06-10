// -------------------------------------------- utilities
let memory = [];
let activeOperation = null;

// -------------------------------------------- display
const display = document.querySelector('.display');

const setDisplayValue = (value) => {
  display.innerHTML = value;
};

// -------------------------------------------- reset
const resetHandler = () => {
  memory = [];
  activeOperation = null;
};

// -------------------------------------------- ac
const ac = document.querySelector('#ac');

const acHandler = () => {
  setDisplayValue(0);
  resetHandler();
};

ac.addEventListener('click', acHandler);
// -------------------------------------------- equal
const equal = document.querySelector('#equal');

const equalHandler = () => {
  const operation = `${memory.join(' ')} ${display.innerHTML}`;
  setDisplayValue(eval(operation));
  resetHandler();
};

equal.addEventListener('click', equalHandler);

// -------------------------------------------- operators
const div = document.querySelector('#div'); // /
const mul = document.querySelector('#mul'); // *
const sum = document.querySelector('#sum'); // +
const sub = document.querySelector('#sub'); // -

const operators = [
  { el: div, op: '/' },
  { el: mul, op: '*' },
  { el: sum, op: '+' },
  { el: sub, op: '-' },
];

const operationHandler = (operatorElement, operatorIdentifier) => {
  if (memory.length === 0) {
    memory.push(display.innerHTML);
  }
  memory.push(operatorIdentifier);
  activeOperation = operatorElement;
  console.log(memory);
};

operators.forEach((operator) => {
  operator.el.addEventListener('click', () =>
    operationHandler(operator.el, operator.op)
  );
});

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
  if (activeOperation !== null) {
    setDisplayValue('');
    activeOperation = null;
  }
  const currentDisplay = display.innerHTML;
  let newDisplay = `${currentDisplay}${n}`;
  if (currentDisplay === '0') {
    newDisplay = n;
  }
  setDisplayValue(newDisplay);
};

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

numbers.forEach((n, i) => {
  n.addEventListener('click', () => numberHandler(i));
});
