// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const dollar = 40;
const result = [];
for (let i = 10; i <= 100; i += 10) {
    result.push(i * dollar);
}

console.log(result.join(' '));
