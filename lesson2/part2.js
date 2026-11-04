// Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
function sum(a, b) {
    return Math.abs(a) + Math.abs(b);
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const operation = prompt('Enter one of these operations (+, -, *, /)');
if (!operation || !['+', '-', '*', '/'].includes(operation.trim())) {
    alert('You enter an empty or wrong operation');
} else {
    const firstNumber = prompt('Enter first number').trim();
    const secondNumber = prompt('Enter second number').trim();

    switch (operation.trim()) {
        case '+': {
            alert(sum(firstNumber, secondNumber));
            break;
        }
        case '-': {
            alert(substract(firstNumber, secondNumber));
            break;
        }
        case '*': {
            alert(multiply(firstNumber, secondNumber));
            break;
        }
        case '/': {
            alert(divide(firstNumber, secondNumber));
            break;
        }
        default: {
            alert('Something went wrong!');
        }
    }
}
