const emojies = document.querySelector('.emojis');

emojies.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const counter = target.parentElement.querySelector('.counter');
        counter.textContent = Number(counter.innerHTML) + 1;
    }
})