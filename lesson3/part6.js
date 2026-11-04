/*
* Дано тризначне число:
* - Визначити чи є парною сума його цифр.
* - Визначити, чи кратна сума цифр п'яти.
* - Визначити чи є добуток його цифр більше 100.
*/

function getDigitSum(numStr) {
    return Number(numStr.charAt(0)) + Number(numStr.charAt(1)) + Number(numStr.charAt(2));
}

function getDigitMultiply(numStr) {
    return Number(numStr.charAt(0)) * Number(numStr.charAt(1)) * Number(numStr.charAt(2));
}

// Визначити чи є парною сума його цифр.
function isDigitsSumEven(sum) {
    if (sum % 2 === 0) {
        console.log(`${sum} is EVEN`);
    } else {
        console.log(`${sum} is ODD`);
    }
}

// Визначити, чи кратна сума цифр п'яти.
function isDigitSumDivisibleByFive(sum) {
    if (sum % 5 === 0) {
        console.log(`${sum} is divisible by 5`);
    } else {
        console.log(`${sum} is NOT divisible by 5`);
    }
}

// Визначити чи є добуток його цифр більше 100.
function isDigitsSumGreaterThanHundred(sum) {
    if (sum > 100) {
        console.log(`${sum} > 100`);
    } else if (sum < 100) {
        console.log(`${sum} < 100`);
    } else {
        console.log(`${sum} = 100`);
    }
}

function main(num) {
    if (typeof num !== 'number') {
        console.log('Please enter number value!');
        return;
    }
    const numStr = String(num);
    if (numStr.length !== 3) {
        console.log(`${num} is not 3 digit number`);
        return;
    }
    const sum = getDigitSum(numStr);
    const mult = getDigitMultiply(numStr);

    console.log(`The sum of digits number ${num} -> ${sum}`);
    console.log(`The multiply of digits number ${num} -> ${mult}`);
    isDigitsSumEven(sum);
    isDigitSumDivisibleByFive(sum);
    isDigitsSumGreaterThanHundred(mult);
}

console.log(main(123));
console.log(main(131));
console.log(main(999));
console.log(main(42));
console.log(main(4242));
console.log(main(4));
console.log(main("424"));
