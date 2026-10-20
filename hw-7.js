//---Task 1---

const people1 = new Array(
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
);

console.log(people1.sort((a, b) => a.age - b.age));

//---Task 2---

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = new Array();

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

const numbers = Array.of(3, -4, 1, 9);
console.log(filter(numbers, isPositive));

const people = new Array(
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
);
console.log(filter(people, isMale));

//---Task 3---

let elapsedSeconds = 0;

const intervalId = setInterval(() => {
    elapsedSeconds += 3;

    if (elapsedSeconds <= 30) {
        // Выводим текущую дату
        console.log(new Date());
    }

    if (elapsedSeconds >= 30) {
        clearInterval(intervalId);
        console.log('30 секунд прошло');
    }
}, 3000);

//---Task 4---

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//---Task 5---

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
