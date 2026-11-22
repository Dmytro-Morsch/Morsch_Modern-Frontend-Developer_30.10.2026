class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `Name: ${this.name};\nAge: ${this.age}`;
    }
}

class Car {
    constructor(mark, model, color, owner) {
        this.mark = mark;
        this.model = model;
        this.color = color;
    }

    setOwner(user) {
        if (user instanceof User) {
            this.owner = user;
        } else {
            console.log(`Argument '${user}' is not instance of class User`);
        }
    }

    start() {
        console.log('The car is started!');
    }

    turnOff() {
        console.log('The car is turned off!');
    }

    toString() {
        return `Mark: ${this.mark};\nModel: ${this.model};\nColor: ${this.color};\nOwner: ${this.owner.name}, ${this.owner.age}`;
    }
}

const isAdult = (userAge) => userAge >= 18;
const isEmpty = (value) => !value?.trim();

function promptRequired(message, emptyError) {
    const value = prompt(message);
    if (isEmpty(value)) {
        alert(emptyError);
        return null;
    }
    return value.trim();
}

function main() {
    const userName = promptRequired('Enter user name:', 'Username cannot be empty');
    if (!userName) return;

    const rawAge = prompt('Enter user age:');
    if (isEmpty(rawAge)) {
        alert('Age cannot be empty');
        return;
    }

    const userAge = Number(rawAge);
    if (Number.isNaN(userAge)) {
        alert('Please enter number value');
        return;
    }

    if (!isAdult(userAge)) {
        alert('Sorry you cannot have a car, you are too young');
        return;
    }

    const carMark = promptRequired('Enter car mark:', 'Car mark cannot be empty');
    if (!carMark) return;

    const carModel = promptRequired('Enter car model:', 'Car model cannot be empty');
    if (!carModel) return;

    const carColor = promptRequired('Enter car color:', 'Car color cannot be empty');
    if (!carColor) return;

    const user = new User(userName, userAge);
    const car = new Car(carMark, carModel, carColor);
    car.setOwner(user);

    alert(car.toString());
}

main();
