function generateKeyLength(length, characters) {
    if (typeof length !== 'number' || isNaN(length) || typeof characters !== 'string') {
        console.log('Parameters were entered incorrectly!');
        return;
    }
    if (length <= 0 || characters.length <= 0) {
        return '';
    }

    let result = '';
    for (let i = 0; i < length; i++) {
        const rundomNumber = Math.floor(Math.random() * characters.length);
        result += characters.charAt(rundomNumber);
    }
    return result;
}

console.log(generateKeyLength(0, 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKeyLength(1, 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKeyLength(16, 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKeyLength(100, 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKeyLength(1000, 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKeyLength('100', 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKeyLength('100', 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKeyLength(100, 10000000));
