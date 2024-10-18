let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function inputNumber(num) {
  if (currentInput === '0') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  display.innerText = currentInput;
}

function inputOperator(op) {
  if (currentInput === '') return;
  if (operator !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  let prev = parseFloat(previousInput);
  let curr = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    case '^':
      result = Math.pow(prev, curr);
      break;
    case '%':
      result = prev % curr;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  display.innerText = currentInput;
}

function clearAll() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  display.innerText = '0';
}
