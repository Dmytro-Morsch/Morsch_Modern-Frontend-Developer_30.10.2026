// Дано два різні числа. Визначити, яке з них більше, а яке менше.
function compareNumbers(a, b) {
    const numA = Math.abs(a);
    const numB = Math.abs(b);
    if (isNaN(numA) || isNaN(numB)) {
        alert(`Element a or b is not a number a=${numA}, b=${numB}`);
        return;
    }
    if (numA > numB) {
        alert(`${numA} greater than ${numB}`);
    } else if (numA < numB) {
        alert(`${numA} less than ${numB}`);
    } else {
        alert(`${numA} equals to ${numB}`);
    }
}

const firstNumber = prompt('Enter first number').trim();
const secondNumber = prompt('Enter second number').trim();

compareNumbers(firstNumber, secondNumber);