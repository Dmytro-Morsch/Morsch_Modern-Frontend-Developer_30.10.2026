function generateList(array) {
    const ul = document.createElement('ul');
    for (const element of array) {
        if (Array.isArray(element)) {
            const innerUl = generateList(element);
            ul.appendChild(innerUl);
        } else {
            const li = document.createElement('li');
            li.textContent = element;
            ul.appendChild(li);
        }
    }
    return ul;
}

const array = [1, 2, [1.1, 1.2, 1.3], 3, 4, 5, [2.1, 2.2, [3.1, [4.1], 3.2, 3.3], 2.3], 6];
const conainer = document.querySelector('.container');
conainer.appendChild(generateList(array));
