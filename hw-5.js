//---Task 1---

const numbers1 = Array.of(1, 5, 4, 10, 0, 3);

for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
    if (numbers1[i] === 10) {
        break;
    }
}

//---Task 2---

const numbers2 = Array.of(1, 5, 4, 10, 0, 3);
const indexValue4 = numbers2.indexOf(4);

console.log(indexValue4);

//---Task 3---

const numbers3 = Array.of(1, 3, 5, 10, 20);
const resultString = numbers3.join(' ');
console.log(resultString);

//---Task 4---

const matrix = new Array();
for (let i = 0; i < 3; i++) {
    const row = new Array();
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    matrix.push(row);
}

console.log(matrix);

//---Task 5---

const myArr = Array.of(1, 1, 1);
myArr.push(2, 2, 2);

console.log(myArr);

//---Task 6---

const mixedArr = Array.of(9, 8, 7, 'a', 6, 5);
mixedArr.sort();

const charIndex = mixedArr.indexOf('a');
if (charIndex !== -1) {
    mixedArr.splice(charIndex, 1);
}

console.log(mixedArr);

//---Task 7---

const guessArr = Array.of(9, 8, 7, 6, 5);
let userGuess = prompt('Угадай число из массива:');
let guessedNumber = Number(userGuess);
if (guessArr.includes(guessedNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//---Task 8---

const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr);

//---Task 9---

const sub1 = Array.of(1, 2, 3);
const sub2 = Array.of(4, 5, 6);
const mainArr = new Array(sub1, sub2);
const flatArr = mainArr.flat();

console.log(flatArr);

//---Task 10---

const randomNumbers = Array.of(3, 7, 2, 9, 5, 1);
for (let i = 0; i < randomNumbers.length - 1; i++) {
    let currentElement = randomNumbers[i];
    let nextElement = randomNumbers[i + 1];
    let sum = currentElement + nextElement;
    
    console.log(`Сумма элементов на позициях ${i} и ${i + 1}: ${sum}`);
}

//---Task 11---

function getSquares(arr) {
    return arr.map(num => num * num);
}

const initialNumbers = Array.of(2, 4, 5, 9);
const squaredResult = getSquares(initialNumbers);

console.log(squaredResult);

//---Task 12---

function getWordLengths(wordsArr) {
    return wordsArr.map(word => word.length);
}

const testWords = Array.of('яблоко', 'дом', 'программирование');
const lengthsResult = getWordLengths(testWords);

console.log(lengthsResult);

//---Task 13---

function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

const mixedNumbers = Array.of(4, -3, 0, 15, -22, -1, 8);
const negativeResult = getNegativeNumbers(mixedNumbers);

console.log(negativeResult);

//---Task 14---

const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenArray = originalArray.filter(num => num % 2 === 0);

console.log('Исходный массив:', originalArray);
console.log('Массив с четными значениями:', evenArray);

//---Task 15---

const randomArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const sumOfElements = randomArray.reduce((acc, current) => acc + current, 0);
const averageValue = sumOfElements / randomArray.length;

console.log('Сгенерированные элементы массива:', randomArray);
console.log('Среднее арифметическое этих цифр:', averageValue);