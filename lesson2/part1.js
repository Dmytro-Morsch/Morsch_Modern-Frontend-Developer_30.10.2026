// За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
let userInput = prompt("Please enter your name", "Test");

if (!userInput) {
    alert('Who are you?')
} else {
    alert('Hello, ' + userInput + '! How are you?')
}