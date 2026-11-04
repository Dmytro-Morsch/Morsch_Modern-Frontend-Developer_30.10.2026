// Визначити середнє арифметичне трьох чисел
/**
 * Calculates the average (arithmetic mean) of an array of numbers.
 *
 * @param {number[]} arr - An array of numbers to average.
 * @returns {number} The arithmetic mean of the numbers. Returns NaN if the array is empty.
 * @example
 * avg([2, 4, 6, 8]); // returns 5
 * avg([10, 20]);     // returns 15
 */
function avg(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log('Find average:');
console.log('[100] -> ' + avg([100]));
console.log('[2, 2] -> ' + avg([2, 2]));
console.log('[400, 200] -> ' + avg([400, 200]));
console.log('[3, 7, 17] -> ' + avg([3, 7, 17]));
console.log('[2, 4, 6, 8] -> ' + avg([2, 4, 6, 8]));
