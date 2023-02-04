// ================================================== utilities
const SELECTED_CLASS_STYLE = 'selected';
const INVALID_CLASS_STYLE = 'invalid';
let memory = [];
let activeOperation = null;
let errorState = false;

// ================================================== display
const display = document.querySelector('#display');

const setDisplayValue = (value) => {
  let displayValue = value;
  if (!isFinite(Number(value))) {
    displayValue = 'Error';
    errorStateHandler();
  }
  display.innerHTML = displayValue;
};

// ================================================== reset
const resetHandler = () => {
  memory = [];
  activeOperation = null;
  errorState = false;
};

// ================================================== ac
const ac = document.querySelector('#ac');

const acHandler = () => {
  ac.innerHTML = 'AC';
  setDisplayValue('0');
  resetHandler();
  resetErrorStateHandler();
};

ac.addEventListener('click', () => acHandler());

// ================================================== sig
const sig = document.querySelector('#sig');

const sigHandler = () => {
  if (errorState) return;
  const currentDisplay = display.innerHTML;
  let newDisplay = Number(currentDisplay) * -1;
  if (currentDisplay === '0') {
    newDisplay = '-0';
  }
  setDisplayValue(newDisplay);
};

sig.addEventListener('click', () => sigHandler());

// ================================================== percent
const percent = document.querySelector('#percent');

const percentHandler = () => {
  if (errorState) return;
  setDisplayValue(Number(display.innerHTML) / 100);
};

percent.addEventListener('click', () => percentHandler());

// ================================================== decimal
const dot = document.querySelector('#dot');

const decimalHandler = () => {
  if (errorState) return;
  const currentDisplay = display.innerHTML;
  if (currentDisplay.indexOf('.') > 0) return;
  setDisplayValue(`${currentDisplay}.`);
};

dot.addEventListener('click', () => decimalHandler());

// ================================================== equal
const equal = document.querySelector('#equal');

const equalHandler = () => {
  if (errorState) return;
  const operation = `${memory.join(' ')} ${Number(display.innerHTML)}`;
  setDisplayValue(eval(operation));
  resetHandler();
};

equal.addEventListener('click', () => equalHandler());

// ================================================== operators
const div = document.querySelector('#div');
const mul = document.querySelector('#mul');
const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');

const operators = [
  { el: div, op: '/' },
  { el: mul, op: '*' },
  { el: sum, op: '+' },
  { el: sub, op: '-' },
];

const setSelectedOperation = (elOp) => {
  elOp.classList.add(SELECTED_CLASS_STYLE);
};

const setUnSelectedOperation = (elOp) => {
  elOp.classList.remove(SELECTED_CLASS_STYLE);
};

const operationHandler = ({ el: opEl, op }) => {
  if (errorState) return;
  if (activeOperation !== null && memory.length > 1) {
    setUnSelectedOperation(activeOperation);
    memory.pop();
  }
  setSelectedOperation(opEl);
  if (memory.length === 0) {
    memory.push(Number(display.innerHTML));
  }
  if (memory.length > 1) {
    equalHandler();
    memory.push(Number(display.innerHTML));
  }
  memory.push(op);
  activeOperation = opEl;
};

operators.forEach((oper) =>
  oper.el.addEventListener('click', () => operationHandler(oper))
);

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
  if (errorState) return;
  if (activeOperation !== null) {
    setUnSelectedOperation(activeOperation);
    setDisplayValue('');
    activeOperation = null;
  }
  ac.innerHTML = 'C';
  const currentDisplay = display.innerHTML;
  let newDisplay = `${currentDisplay}${n}`;
  if (currentDisplay === '0') {
    newDisplay = n;
  }
  setDisplayValue(Number(newDisplay));
};

numbers.forEach((n, i) => n.addEventListener('click', () => numberHandler(i)));

// ================================================== error
const errorStateHandler = () => {
  errorState = true;
  numbers.forEach((el) => {
    el.classList.add(INVALID_CLASS_STYLE);
  });
  operators.forEach(({ el }) => {
    el.classList.add(INVALID_CLASS_STYLE);
  });
  dot.classList.add(INVALID_CLASS_STYLE);
  equal.classList.add(INVALID_CLASS_STYLE);
  percent.classList.add(INVALID_CLASS_STYLE);
  sig.classList.add(INVALID_CLASS_STYLE);
};

const resetErrorStateHandler = () => {
  errorState = false;
  numbers.forEach((el) => {
    el.classList.remove(INVALID_CLASS_STYLE);
  });
  operators.forEach(({ el }) => {
    el.classList.remove(INVALID_CLASS_STYLE);
  });
  dot.classList.remove(INVALID_CLASS_STYLE);
  equal.classList.remove(INVALID_CLASS_STYLE);
  percent.classList.remove(INVALID_CLASS_STYLE);
  sig.classList.remove(INVALID_CLASS_STYLE);
};
