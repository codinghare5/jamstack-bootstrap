const firstNumber = 5;
const secondNumber = 2;


function biggerNumber(a, b) {
    var message = '';
    if(a > b) {
        return a;
    } else if(a===b) {
        message += 'ERROR: Numbers are equal.';
        console.warn(message);
    } else if(isNaN(a) || isNaN(b)) {
        message += 'ERROR: Try to put numbers!';
        console.warn(message);
    } else return b;
}

biggerNumber(firstNumber, secondNumber);