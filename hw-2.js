//---Task 1---
let password = 'Giorno1234';

let userPassword = prompt('Введите пароль');

if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//---Task 2---
let c = 2;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//---Task 3---
let d = 150;
let e = 50;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//---Task 4---
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//---Task 5---
let monthNumber = 12;

if (monthNumber < 1 || monthNumber > 12) {
    console.log('Неверный номер месяца');
} else {

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('осень');
            break;
    }
}


