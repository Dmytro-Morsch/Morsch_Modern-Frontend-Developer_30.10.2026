// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
function checkDivisibility(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (numA === 0 || numB === 0 || isNaN(numA) || isNaN(numB)) {
        alert('Please enter valid non-zero numbers');
        return;
    }

    const dividend = numA % numB;
    const divisor = numB % numA;

    if (dividend === 0 && divisor === 0) {
        alert(`Both number is a divisor: ${a}/${b}, ${b}/${a}`);
    } else if (dividend === 0 && divisor !== 0) {
        alert(`You can divide ${a}/${b}, but not vise versa ${b}/${a}`);
    } else if (dividend !== 0 && divisor === 0) {
        alert(`You cannot divide ${a}/${b}, but you can divide ${b}/${a}`);
    } else {
        alert(`Niether number is a divisor: ${a}/${b}, ${b}/${a}`);
    }
}

const inputA = prompt('Enter first number:');
const inputB = prompt('Enter second number:');

checkDivisibility(inputA, inputB);
