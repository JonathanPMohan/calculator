import {printToDom} from '../helpers/util.js';
import {multiply, subtract, divide, add} from '../helpers/maths.js';

const calc = {
    firstNumber: '',
    secondNumber: '',
    mathType: '',
    display: ''
};

const calculate = (num1, num2, mathType) => {
    let answer = 0;
    switch(mathType) {
        case 'multiply':
            answer = multiply(num1, num2);
            break;
        case 'divide':
            answer = divide(num1, num2);
            break;
        case 'add':
            answer = add(num1, num2);
            break;
        case 'subtract':
            answer = subtract(num1, num2);
            break;
        default:
            answer = 'nope';
    }
    setDisplay(answer);
   };

   const setDisplay = (someNumber) => {
        calc.display = someNumber;
        printToDom(calc.display, 'result');
   };

   const initialDisplay = () => {
       printToDom(0, 'result');
   }

   const addNumber = (num) => {
       if(calc.mathType === '') {
           calc.firstNumber += num;
           setDisplay(calc.firstNumber);
    } else {
       
       calc.secondNumber += num;
       setDisplay(calc.secondNumber);}
   };

   export {calculate, addNumber, initialDisplay};