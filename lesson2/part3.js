// Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
function compare(a, b) {
    return a === b;
}

console.log('Compare elements:');
console.log(compare(42, 42));
console.log(compare(42, '42'));
console.log(compare('42', '42'));
console.log(compare(3 + 3, 6));
