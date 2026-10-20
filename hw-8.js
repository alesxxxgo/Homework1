//---Task 1---

const heading1 = document.querySelector('#title-task1');
const button1 = document.querySelector('#btn-task1');

button1.addEventListener('click', () => {
    if (heading1.style.display === 'none') {
        heading1.style.display = 'block';
        button1.textContent = 'Скрыть';
    } else {
        heading1.style.display = 'none';
        button1.textContent = 'Показать';
    }
});

//---Task 2---

const paragraph2 = document.querySelector('#text-task2');
const button2 = document.querySelector('#btn-task2');

button2.addEventListener('click', () => {
    paragraph2.style.color = 'blue';
});

//---Task 3---

const heading3 = document.querySelector('#title-task3');
const button3 = document.querySelector('#btn-task3');

button3.addEventListener('click', () => {
    heading3.textContent = 'Привет, мир!';
});

//---Task 4---

const elements4 = document.querySelectorAll('.description1');

elements4.forEach(element => {
    element.textContent = 'Измененный текст';
});

//---Task 5---

const paragraphs5 = document.querySelectorAll('.description');

paragraphs5.forEach(param => {
    param.textContent = 'Новый текст';
});

//---Task 6---

const button6 = document.querySelector('#btn-task6');

button6.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

//---Task 7---

const button7 = document.querySelector('#btn-task7');

button7.addEventListener('click', () => {
    const firstTarget = document.querySelector('.description');
    
    // Проверяем, существует ли еще такой элемент на странице, чтобы не вызвать ошибку
    if (firstTarget) {
        firstTarget.remove();
    }
});

