import {calculate} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

// calculate(4, 2, 'multiply'); //8
// calculate(4, 2, 'divide'); //8
// calculate(4, 2, 'add');
// calculate(4, 2, 'subtract');
// calculate(4, 2, 'multiply');

const initializeApp = () => {
    buttonEvents();
    
}
initializeApp();