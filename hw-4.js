//---Task 1---

function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Примеры проверки:
console.log(getMin(8, 4));
console.log(getMin(6, 6));

//---Task 2---

function checkEven(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEven(4));
console.log(checkEven(7));

//---Task 3---
//--Function 1--

function logSquare(num) {
    console.log(num * num);
}

logSquare(5);

//--Function 2--

function getSquare(num) {
    return num * num;
}

let result = getSquare(6); 
console.log(result);

//---Task 4---

function checkAge() {
    let age = prompt('Сколько вам лет?');

    age = Number(age);

    if (age < 0) {
        return 'Вы ввели неправильное значение';
    } 
    else if (age >= 0 && age <= 12) {
        return 'Привет, друг!';
    } 
    else if (age >= 13) {
        return 'Добро пожаловать!';
    }
}

alert(checkAge());

//---Task 5---

function multiplyNumbers(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return Number(a) * Number(b);
    }
}

console.log(multiplyNumbers(5, 6));
console.log(multiplyNumbers('5', '10'));
console.log(multiplyNumbers('текст', 4));

//---Task 6---

function cubeNumber() {
    let userInput = prompt('Введите число:');
    
    let n = Number(userInput);

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } 
    else {
        let result = n ** 3;
        return `${n} в кубе равняется ${result}`;
    }
}

alert(cubeNumber());

//---Task 7---

function getArea() {
    return Math.PI * (this.radius ** 2);
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
};

const circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter
};

console.log(`Circle 1 (r=${circle1.radius}): Площадь = ${circle1.getArea().toFixed(2)}, Периметр = ${circle1.getPerimeter().toFixed(2)}`);
console.log(`Circle 2 (r=${circle2.radius}): Площадь = ${circle2.getArea().toFixed(2)}, Периметр = ${circle2.getPerimeter().toFixed(2)}`);