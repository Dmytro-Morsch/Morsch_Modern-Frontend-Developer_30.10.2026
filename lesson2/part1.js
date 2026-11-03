let userInput = prompt("Please enter your name", "Test");

if (!userInput) {
    alert('Who are you?')
} else {
    alert('Hello, ' + userInput + '! How are you?')
}