/*
* Дано тризначне число.
* - Чи правда, що всі цифри однакові?
* - Чи є серед цифр цифри однакові?
*/

// Чи правда, що всі цифри однакові?
function allDigitsSimilar(first, second, third) {
    return first === second && second === third && first === third;
}

// Чи є серед цифр цифри однакові?
function someDigitsSimilar(first, second, third) {
    return first === second || second === third || first === third;
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
    const first = Number(numStr.charAt(0));
    const second = Number(numStr.charAt(1));
    const third = Number(numStr.charAt(2));

    if (allDigitsSimilar(first, second, third)) {
        console.log(`All digits of number ${num} are similar`);
    } else if (someDigitsSimilar(first, second, third)) {
        console.log(`Some digits of number ${num} are similar`);
    } else {
        console.log(`There are no similar digits in this number ${num}`)
    }
}

console.log(main(123));
console.log(main(113));
console.log(main(121));
console.log(main(111));
console.log(main(42));
console.log(main(4242));
console.log(main('111'));
