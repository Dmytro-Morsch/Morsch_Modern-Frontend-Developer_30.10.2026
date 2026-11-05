// Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).
function isPrime(num) {
    if (typeof n !== 'number' || isNaN(n)) {
        console.log('Please enter a valid number!');
        return false;
    }
    console.log(`Is ${num} prime?`)
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(16));
console.log(isPrime(36));
console.log(isPrime(743));
console.log(isPrime('test'));
