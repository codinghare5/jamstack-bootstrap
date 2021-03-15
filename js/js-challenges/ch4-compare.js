const firstNumber = 5;
const secondNumber = 2;
var error = false;

function compareTwoNumbers(a, b) {
    var message = '';
    error = false;
    if(a > b) {
        message += 'First number is bigger.';
    } else if(a===b || isNaN(a) || isNaN(b)) {
        error = true;
        message += 'ERROR: Can not compare!';
    } else message += 'Second number is bigger.'

    if(!error){
        console.log()
        console.log(message);
    } else console.warn(message);
}

compareTwoNumbers(firstNumber, secondNumber);