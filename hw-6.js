//---Task 1---

let str = 'js';
let resultStr = str.toUpperCase();

console.log(resultStr);

//---Task 2---

function filterBySearch(array, searchString) {
    let search = searchString.toLowerCase();
    
    return array.filter(item => {
        return item.toLowerCase().startsWith(search);
    });
}

let fruits = Array.of('Apple', 'Banana', 'apricot', 'Orange', 'Avocado');
let filteredFruits = filterBySearch(fruits, 'ap');

console.log(filteredFruits);

//---Task 3---

let num = 32.58884;

let floorNum = Math.floor(num);
console.log('До меньшего целого:', floorNum); // Выведет: 32

let ceilNum = Math.ceil(num);
console.log('До большего целого:', ceilNum); // Выведет: 33

let roundNum = Math.round(num);
console.log('До ближайшего целого:', roundNum); // Выведет: 33

//---Task 4---

let minValue = Math.min(52, 53, 49, 77, 21, 32);

let maxValue = Math.max(52, 53, 49, 77, 21, 32);

console.log('Минимальное число:', minValue); // Выведет: 21
console.log('Максимальное число:', maxValue); // Выведет: 77

//---Task 5---

function printRandomOneToTen() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    
    console.log(randomNumber);
}

printRandomOneToTen();

//---Task 6---

function generateRandomArray(limitNumber) {
    let arrayLength = Math.floor(limitNumber / 2);
    
    let resultArr = new Array();
    
    for (let i = 0; i < arrayLength; i++) {
        let randomNum = Math.floor(Math.random() * (limitNumber + 1));
        resultArr.push(randomNum);
    }
    
    return resultArr;
}

console.log(generateRandomArray(10));

//---Task 7---

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(5, 15));

//---Task 8---

let today = new Date();
console.log(today);

//---Task 9---

let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//---Task 10---

function formatMyDate(inputDate) {
    const months = Array.of(
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    );
    const daysOfWeek = Array.of(
        'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'
    );

    let day = inputDate.getDate();
    let month = months[inputDate.getMonth()];
    let year = inputDate.getFullYear();
    let dayName = daysOfWeek[inputDate.getDay()];

    let hours = String(inputDate.getHours()).padStart(2, '0');
    let minutes = String(inputDate.getMinutes()).padStart(2, '0');
    let seconds = String(inputDate.getSeconds()).padStart(2, '0');

    let dateLine = `Дата: ${day} ${month} ${year} — это ${dayName}.`;
    let timeLine = `Время: ${hours}:${minutes}:${seconds}`;

    return `${dateLine}\n${timeLine}`;
}

console.log(formatMyDate(new Date()));
