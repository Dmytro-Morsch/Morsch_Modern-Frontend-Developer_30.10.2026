function splitNumber(number) {
    const absNum = Math.abs(number);
    const numLength = String(Math.abs(absNum)).length;
    let digits = [];
    for (let i = numLength; i > 0; i--) {
        let a = 10 ** (i - 1);
        digits.push(Math.floor(absNum / a) % 10);
    }
    return digits.join('_');
}

console.log(splitNumber(54321));