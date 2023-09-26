// Functions for basic arithmetic operations
function addition(addend1, addend2){
  return addend1 + addend2;
};

function subtraction(minuend, subtrahend){
  return minuend - subtrahend;
};

function multiplication(multiplier, multiplicand){
  return multiplier * multiplicand;
};

function division(dividend, divisor){
  return dividend / divisor;
};

/* A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
Create three variables for each of the parts of a calculator operation. 
Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later. */

let firstNumber
let secondNumber
let operator

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers

function operate(firstNumber, operator, secondNumber){
  let result;
  //let stringOperator = toString(operator);
  switch(operator){
    case '+':
      result = addition(firstNumber, secondNumber);
      break;
    
    case '-':
      result = subtraction(firstNumber, secondNumber); 
      break;

    case '*':
      result = multiplication(firstNumber, secondNumber);
      break;

    case '/':
      result = division(firstNumber, secondNumber);
      break;
  }
  return result;
}

/* Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
  
Do not worry about wiring up the JS just yet.

There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.

Add a “clear” button. */


