//---Task 1---

for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//---Task 2---

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//---Task 3---

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//---Task 4---

let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};

for (let key in obj) {
    console.log(`"${key}" — зарплата "${obj[key]}" долларов.`);
}

//---Task 5---

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(`Получившееся число в результате: ${n}`);
console.log(`Количество итераций (переменная num): ${num}`);

//---Task 6---

let firstFriday = 5; 

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

