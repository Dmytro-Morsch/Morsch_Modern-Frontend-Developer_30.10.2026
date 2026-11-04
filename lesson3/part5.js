// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
function compareTwoDigitNumber(twoDigitNumber) {
    if (typeof twoDigitNumber !== 'number') {
        console.log('Please enter number value!');
        return;
    }

    const numStr = String(twoDigitNumber);
    if (numStr.length === 2) {
        const firstDigit = Number(numStr.charAt(0));
        const secondDigit = Number(numStr.charAt(1));
        if (firstDigit > secondDigit) {
            console.log(`${firstDigit} > ${secondDigit}`);
        } else if (firstDigit < secondDigit) {
            console.log(`${firstDigit} < ${secondDigit}`);
        } else {
            console.log(`${firstDigit} = ${secondDigit}`);
        }
    } else {
        console.log('Please enter two digit number');
    }
}

console.log(compareTwoDigitNumber(42));
console.log(compareTwoDigitNumber(24));
console.log(compareTwoDigitNumber(10));
console.log(compareTwoDigitNumber(11));
console.log(compareTwoDigitNumber(1));
console.log(compareTwoDigitNumber(321));
console.log(compareTwoDigitNumber("42"));
