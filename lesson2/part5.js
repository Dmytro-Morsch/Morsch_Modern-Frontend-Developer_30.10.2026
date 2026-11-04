// Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)
/**
 * Splits a given number into its individual digits and returns them as a space-separated string.
 * Handles both positive and negative numbers by using their absolute value.
 *
 * @param {number} number - The number to split into digits.
 * @returns {string} A string containing the individual digits separated by spaces (e.g., "1 2 3").
 * @example
 * splitNumber(458); // returns "4 5 8"
 * splitNumber(-92); // returns "9 2"
 */
function splitNumber(number) {
    const absNum = Math.abs(number);
    const numLength = String(Math.abs(absNum)).length;
    let digits = [];
    for (let i = numLength; i > 0; i--) {
        let numerator = 10 ** (i - 1);
        digits.push(Math.floor(absNum / numerator) % 10);
    }
    return digits.join(' ');
}

console.log('Split number:');
console.log('6543210 -> ' + splitNumber(6543210));
console.log('654321 -> ' + splitNumber(654321));
console.log('54321 -> ' + splitNumber(54321));
console.log('2026 -> ' + splitNumber(2026));
console.log('123 -> ' + splitNumber(123));
console.log('10 -> ' + splitNumber(10));
console.log('3 -> ' + splitNumber(3));
