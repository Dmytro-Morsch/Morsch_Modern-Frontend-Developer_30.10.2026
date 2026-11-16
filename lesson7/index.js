function removeElement(arr, target) {
    return arr.filter((element) => element !== target);
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 5];
console.log(removeElement(array1, 5));

const array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElement(array2, 10));

const array3 = [1, 2, 3, 4, '5', 6, 7, 5];
console.log(removeElement(array3, 5));

const array4 = [1];
console.log(removeElement(array4, 1));

const array5 = [];
console.log(removeElement(array5, 42));

const array6 = [3, 3, 3, 3, 1, 3, 3, 3, 3];
console.log(removeElement(array6, 3));