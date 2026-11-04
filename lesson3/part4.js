//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
function checkLastDigitOfNumber(num) {
    if (typeof num !== 'number') {
        console.log('Please enter number value');
    }
    const lastDigit = num % 10;
    if (lastDigit % 2 == 0) {
        console.log(`Last digit of number ${num} is EVEN`);
    } else {
        console.log(`Last digit of number ${num} is ODD`);
    }
}

console.log('Check last digit of number:');
console.log(checkLastDigitOfNumber('2026'));
console.log(checkLastDigitOfNumber(2026));
console.log(checkLastDigitOfNumber(-2026));
console.log(checkLastDigitOfNumber(2025));
console.log(checkLastDigitOfNumber(33));
console.log(checkLastDigitOfNumber(20));
console.log(checkLastDigitOfNumber(2));
console.log(checkLastDigitOfNumber(1));
console.log(checkLastDigitOfNumber(0));
