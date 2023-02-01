// ================================================== display
const display = document.querySelector('#display');

// ================================================== ac
const ac = document.querySelector('#ac');

ac.addEventListener('click', () => {
  ac.innerHTML = 'AC';
  display.innerHTML = '0';
});

// ================================================== sig
const sig = document.querySelector('#sig');

sig.addEventListener('click', () => {
  const currentDisplay = display.innerHTML;
  let newDisplay = `${Number(currentDisplay) * -1}`;
  if (currentDisplay === '0') {
    newDisplay = '-0';
  }
  display.innerHTML = newDisplay;
});

// ================================================== percent
const percent = document.querySelector('#percent');

percent.addEventListener('click', () => {
  const currentDisplay = display.innerHTML;
  // Jose Miguiel
  // x = n1
  // y = n2 (Porcentaje que quiero encontrar)
  // (n1 * n2 ) / 100

  // simples mortales
  display.innerHTML = `${Number(currentDisplay) / 100}`;
});

// ================================================== decimal
const dot = document.querySelector('#dot');

// ================================================== equal
const equal = document.querySelector('#equal');

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

const operationHandler = (op) => {
  // Herbert:
  // Array de 3 posiciones (memoria de operaciones) ['-90', '*', '100']
};

operators.forEach((oper) =>
  oper.el.addEventListener('click', () => operationHandler(oper.op))
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
  ac.innerHTML = 'C';
  const currentDisplay = display.innerHTML;
  let newDisplay = `${currentDisplay}${n}`;
  if (currentDisplay === '0') {
    newDisplay = n;
  }
  display.innerHTML = `${Number(newDisplay)}`;
};

numbers.forEach((n, i) => n.addEventListener('click', () => numberHandler(i)));
