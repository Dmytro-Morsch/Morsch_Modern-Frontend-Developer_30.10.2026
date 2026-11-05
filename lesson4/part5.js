// Дано деяке число. Ваше завдання – визначити, чи можна отримати це число, піднявши число 3 до певного натурального ступеня. (Як приклад, числа 9 та 81 можна отримати цим способом, але 13 – ні.)
function isPowerOfThree(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        console.log('Please enter a valid number!');
        return false;
    }
    if (n <= 0) {
        console.log('Enter number that greater than zero!');
        return false;
    }

    console.log(`${n} is power of three?`);
    let i = 0;
    while (true) {
        const pow = Math.pow(3, i);
        if (pow < n) {
            i++;
            continue;
        } else if (pow > n) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(isPowerOfThree('test'));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(13));
