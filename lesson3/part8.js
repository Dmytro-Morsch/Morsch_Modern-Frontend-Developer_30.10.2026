// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
function isNumberMirrored(numStr) {
    for (let i = 1; i <= numStr.length / 2; i++) {
        const first = numStr.charAt(i - 1);
        const second = numStr.charAt(numStr.length - i);
        if (first !== second) {
            return false;
        }
    }
    return true;
}

function main(num) {
    const numStr = String(num);
    if (numStr.length % 2 !== 0) {
        console.log('Count of digits is NOT even');
        return;
    }
    if (isNumberMirrored(numStr)) {
        console.log(`Number ${num} is mirrored`);
    } else {
        console.log(`Number ${num} is NOT mirrored`);
    }
}

console.log(main(123321));
console.log(main(147741));
console.log(main(147641));
console.log(main(1477411));
console.log(main(12));
console.log(main(11));
console.log(main(1));
console.log(main(1441));
