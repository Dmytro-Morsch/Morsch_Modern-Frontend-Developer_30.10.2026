// Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
function getNumbersWithSquareLessThan(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        console.log('Please enter a valid number!');
        return [];
    }
    const result = [];
    for (let i = 1; i <= 100; i++) {
        const pow = i * i;
        if (pow <= n) {
            result.push(pow);
        } else {
            continue;
        }
    }
    return result;
}

console.log(getNumbersWithSquareLessThan(2345).join(' '));
console.log(getNumbersWithSquareLessThan(99).join(' '));
console.log(getNumbersWithSquareLessThan(25).join(' '));
console.log(getNumbersWithSquareLessThan(10).join(' '));
console.log(getNumbersWithSquareLessThan(1).join(' '));
console.log(getNumbersWithSquareLessThan(0).join(' '));
console.log(getNumbersWithSquareLessThan('test').join(' '));
