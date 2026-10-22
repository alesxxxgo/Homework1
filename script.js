const quiz = [
  {
    question: "Какой цвет неба?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Семь", "2. Шесть", "3. Восемь"],
    correctAnswer: 1
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Шесть", "2. Четыре", "3. Пять"],
    correctAnswer: 3
  }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

// Элементы игры
const quizWindow = document.getElementById('quiz-game-window');
const questionText = document.getElementById('question-text');
const optionsBox = document.getElementById('options-box');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');
const closeQuizBtn = document.getElementById('close-quiz-btn');

// Кнопки открытия (и верхняя плитка, и нижняя кнопка «Играть!»)
const openTriggers = document.querySelectorAll('a[href="#easy-quizz"], .id-quiz-trigger');

function openQuizGame(e) {
  e.preventDefault();
  quizWindow.classList.remove('hidden');
  resetQuiz();
  showQuestion();
  
  // Ювелирный точный скролл: центрирует окно игры прямо перед глазами пользователя
  setTimeout(() => {
    quizWindow.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }, 50);
}

// Привязываем открытие ко всем триггерам
openTriggers.forEach(trigger => {
  trigger.addEventListener('click', openQuizGame);
});

// Закрытие игры
closeQuizBtn.addEventListener('click', () => {
  quizWindow.classList.add('hidden');
});

function showQuestion() {
  if (currentQuestionIndex >= quiz.length) {
    showResults();
    return;
  }

  const currentQuiz = quiz[currentQuestionIndex];
  questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuiz.question}`;
  optionsBox.innerHTML = '';

  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.className = 'option-btn';
    button.addEventListener('click', () => checkAnswer(index + 1));
    optionsBox.appendChild(button);
  });
}

function checkAnswer(userAnswer) {
  if (userAnswer === quiz[currentQuestionIndex].correctAnswer) {
    correctAnswersCount++;
  }
  currentQuestionIndex++;
  showQuestion();
}

function showResults() {
  quizBox.classList.add('hidden');
  resultBox.classList.remove('hidden');
  scoreText.textContent = `Вы ответили правильно на ${correctAnswersCount} из ${quiz.length} вопросов.`;
  alert(`Вы ответили правильно на ${correctAnswersCount} из ${quiz.length} вопросов.`);
}

function resetQuiz() {
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  resultBox.classList.add('hidden');
  quizBox.classList.remove('hidden');
}

restartBtn.addEventListener('click', () => {
  resetQuiz();
  showQuestion();
});

// Переменные для логики игры
let secretNumber = 0;
let attemptsCount = 0;

// Элементы интерфейса
const guessWindow = document.getElementById('guess-game-window');
const guessInput = document.getElementById('user-guess-input');
const submitGuessBtn = document.getElementById('submit-guess-btn');
const guessHintText = document.getElementById('guess-hint-text');
const guessMainBox = document.getElementById('guess-box');
const guessResultBox = document.getElementById('guess-result-box');
const guessStatsText = document.getElementById('guess-stats-text');
const restartGuessBtn = document.getElementById('restart-guess-btn');
const closeGuessBtn = document.getElementById('close-guess-btn');

// Кнопки открытия (верхняя плитка-ссылка с главной страницы и нижняя кнопка «Играть!»)
const openGuessTriggers = document.querySelectorAll('a[href="#guess-the-number"], .id-guess-trigger');

// 1. Функция инициализации / перезапуска игры
function initGuessGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1; // Число от 1 до 100
  attemptsCount = 0;
  guessInput.value = '';
  guessHintText.textContent = 'Жду вашей догадки...';
  guessHintText.style.color = '#202027';
  guessMainBox.classList.remove('hidden');
  guessResultBox.classList.add('hidden');
}

// Функция открытия окна игры с плавным центрированием
function openGuessGame(e) {
  e.preventDefault();
  guessWindow.classList.remove('hidden');
  initGuessGame();
  
  // Плавный скролл: карточка встанет ровно по центру экрана
  setTimeout(() => {
    guessWindow.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }, 50);
}

// Привязываем открытие к кнопкам
openGuessTriggers.forEach(trigger => {
  trigger.addEventListener('click', openGuessGame);
});

// Закрытие игры по крестику
closeGuessBtn.addEventListener('click', () => {
  guessWindow.classList.add('hidden');
});

// 2, 3, 4. Проверка ответа пользователя
submitGuessBtn.addEventListener('click', () => {
  const userValue = parseInt(guessInput.value, 10);

  // Простая проверка корректности ввода
  if (isNaN(userValue) || userValue < 1 || userValue > 100) {
    guessHintText.textContent = 'Введите число от 1 до 100!';
    guessHintText.style.color = '#ff4d4d';
    return;
  }

  attemptsCount++;

  // 4. Завершение игры при угадывании
  if (userValue === secretNumber) {
    guessMainBox.classList.add('hidden');
    guessResultBox.classList.remove('hidden');
    guessStatsText.textContent = `Вы угадали число ${secretNumber} за ${attemptsCount} попыток!`;
    alert(`Поздравляем! Вы угадали число за ${attemptsCount} попыток!`);
  } 
  // 3. Подсказки: больше или меньше
  else if (userValue < secretNumber) {
    guessHintText.textContent = 'Загаданное число БОЛЬШЕ вашего 📈';
    guessHintText.style.color = '#007bff';
  } else {
    guessHintText.textContent = 'Загаданное число МЕНЬШЕ вашего 📉';
    guessHintText.style.color = '#007bff';
  }
  
  guessInput.value = ''; // Очищаем инпут для следующей попытки
  guessInput.focus();
});

// Бонус: отправка числа по нажатию клавиши Enter
guessInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    submitGuessBtn.click();
  }
});

// Привязка кнопки "Играть заново"
restartGuessBtn.addEventListener('click', initGuessGame);

// Переменные для логики игры "Простая арифметика"
let currentCorrectAnswer = 0;
let currentTaskString = '';

// Элементы интерфейса
const arithmeticWindow = document.getElementById('arithmetic-game-window');
const arithmeticTaskText = document.getElementById('arithmetic-task-text');
const arithmeticInput = document.getElementById('user-arithmetic-input');
const submitArithmeticBtn = document.getElementById('submit-arithmetic-btn');
const arithmeticHintText = document.getElementById('arithmetic-hint-text');
const arithmeticMainBox = document.getElementById('arithmetic-box');
const arithmeticResultBox = document.getElementById('arithmetic-result-box');
const arithmeticResultTitle = document.getElementById('arithmetic-result-title');
const arithmeticStatsText = document.getElementById('arithmetic-stats-text');
const nextArithmeticBtn = document.getElementById('next-arithmetic-btn');
const closeArithmeticBtn = document.getElementById('close-arithmetic-btn');

const openArithmeticTriggers = document.querySelectorAll('a[href="#simple-arithmethics"], .id-arithmetic-trigger');

// 1. Генерация случайной задачи
function generateArithmeticTask() {
  // Обходной синтаксис массивов для безопасности платформы
  const operators = Array.of('+', '-', '*', '/');
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  
  let num1 = 0;
  let num2 = 0;

  switch (randomOperator) {
    case '+':
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
      currentCorrectAnswer = num1 + num2;
      break;
    case '-':
      num1 = Math.floor(Math.random() * 30) + 10;
      num2 = Math.floor(Math.random() * num1); // чтобы не было отрицательных чисел
      currentCorrectAnswer = num1 - num2;
      break;
    case '*':
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      currentCorrectAnswer = num1 * num2;
      break;
    case '/':
      num2 = Math.floor(Math.random() * 9) + 2; // делитель от 2 до 10
      currentCorrectAnswer = Math.floor(Math.random() * 10) + 1; // частное от 1 до 10
      num1 = num2 * currentCorrectAnswer; // гарантирует деление нацело!
      break;
  }

  currentTaskString = `${num1} ${randomOperator} ${num2} = ?`;
  arithmeticTaskText.textContent = currentTaskString;
  
  // Сброс интерфейса к состоянию ввода
  arithmeticInput.value = '';
  arithmeticHintText.textContent = 'Жду вашего ответа...';
  arithmeticHintText.style.color = '#202027';
  arithmeticMainBox.classList.remove('hidden');
  arithmeticResultBox.classList.add('hidden');
}

// Открытие окна игры
function openArithmeticGame(e) {
  e.preventDefault();
  arithmeticWindow.classList.remove('hidden');
  generateArithmeticTask();
  
  setTimeout(() => {
    arithmeticWindow.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }, 50);
}

openArithmeticTriggers.forEach(trigger => {
  trigger.addEventListener('click', openArithmeticGame);
});

closeArithmeticBtn.addEventListener('click', () => {
  arithmeticWindow.classList.add('hidden');
});

// 3. Проверка ответа
submitArithmeticBtn.addEventListener('click', () => {
  const userAns = parseInt(arithmeticInput.value, 10);

  if (isNaN(userAns)) {
    arithmeticHintText.textContent = 'Пожалуйста, введите число!';
    arithmeticHintText.style.color = '#ff4d4d';
    return;
  }

  arithmeticMainBox.classList.add('hidden');
  arithmeticResultBox.classList.remove('hidden');

  if (userAns === currentCorrectAnswer) {
    arithmeticResultTitle.textContent = 'Верно! 🎉';
    arithmeticResultTitle.style.color = 'green';
    arithmeticStatsText.textContent = `Отличная работа! Пример ${currentTaskString.replace('?', currentCorrectAnswer)} решен правильно.`;
    alert('Верно!');
  } else {
    arithmeticResultTitle.textContent = 'Ошибка ❌';
    arithmeticResultTitle.style.color = 'red';
    arithmeticStatsText.textContent = `Правильный ответ был: ${currentCorrectAnswer}. Попробуйте еще раз в следующем примере!`;
    alert('Ошибка');
  }
});

// Отправка по Enter
arithmeticInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    submitArithmeticBtn.click();
  }
});

// Кнопка перехода к следующему примеру
nextArithmeticBtn.addEventListener('click', () => {
  generateArithmeticTask();
  arithmeticInput.focus();
});

// Элементы интерфейса игры "Переверни текст"
const flipWindow = document.getElementById('flip-game-window');
const flipInput = document.getElementById('user-flip-input');
const submitFlipBtn = document.getElementById('submit-flip-btn');
const flipResultBox = document.getElementById('flip-result-box');
const flippedOutputText = document.getElementById('flipped-output-text');
const clearFlipBtn = document.getElementById('clear-flip-btn');
const closeFlipBtn = document.getElementById('close-flip-btn');

const openFlipTriggers = document.querySelectorAll('a[href="#flip-the-text"], .id-flip-trigger');

// Открытие окна игры
function openFlipGame(e) {
  e.preventDefault();
  flipWindow.classList.remove('hidden');
  resetFlipGame();
  
  setTimeout(() => {
    flipWindow.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
    flipInput.focus();
  }, 50);
}

openFlipTriggers.forEach(trigger => {
  trigger.addEventListener('click', openFlipGame);
});

// Закрытие игры по крестику
closeFlipBtn.addEventListener('click', () => {
  flipWindow.classList.add('hidden');
});

// Логика переворота текста
submitFlipBtn.addEventListener('click', () => {
  const originalText = flipInput.value.trim();

  // Валидация на пустой ввод
  if (originalText === '') {
    alert('Пожалуйста, введите хотя бы одно слово!');
    flipInput.focus();
    return;
  }

  // 2. Алгоритм переворота текста
  const flippedText = originalText.split('').reverse().join('');

  // 3. Вывод перевернутого текста на сайт и в alert
  flippedOutputText.textContent = flippedText;
  flipResultBox.classList.remove('hidden');
  
  // Дублируем в alert, как требуют пункты задания
  alert(`Перевернутый текст: ${flippedText}`);
});

// Запуск переворота по нажатию Enter
flipInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    submitFlipBtn.click();
  }
});

// Сброс игры
function resetFlipGame() {
  flipInput.value = '';
  flippedOutputText.textContent = '';
  flipResultBox.classList.add('hidden');
}

clearFlipBtn.addEventListener('click', () => {
  resetFlipGame();
  flipInput.focus();
});

// Элементы игры КНБ
const rpsWindow = document.getElementById('rps-game-window');
const rpsBox = document.getElementById('rps-box');
const rpsResultBox = document.getElementById('rps-result-box');
const rpsResultTitle = document.getElementById('rps-result-title');
const rpsStatsText = document.getElementById('rps-stats-text');
const restartRpsBtn = document.getElementById('restart-rps-btn');
const closeRpsBtn = document.getElementById('close-rps-btn');

const openRpsTriggers = document.querySelectorAll('a[href="#rock-paper-scissors"], .id-rps-trigger');
const rpsButtons = document.querySelectorAll('.rps-btn');

// Открытие игры
openRpsTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    rpsWindow.classList.remove('hidden');
    resetRpsGame();
    
    setTimeout(() => {
      rpsWindow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  });
});

// Закрытие игры
closeRpsBtn.addEventListener('click', () => {
  rpsWindow.classList.add('hidden');
});

// Логика раунда при клике на Камень, Ножницы или Бумагу
rpsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const userChoice = btn.getAttribute('data-choice');
    
    // Обходной синтаксис для стабильности платформы
    const variants = Array.of('камень', 'ножницы', 'бумага');
    const computerChoice = variants[Math.floor(Math.random() * variants.length)];

    let resultTitle = '';
    let resultColor = '';

    if (userChoice === computerChoice) {
      resultTitle = 'Ничья 🤝';
      resultColor = '#6c757d';
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
      resultTitle = 'Победа! 🎉';
      resultColor = '#BCEC30'; // Твой фирменный салатовый
    } else {
      resultTitle = 'Поражение 😢';
      resultColor = '#ff4d4d';
    }

    // Обновляем и показываем окно результатов
    rpsResultTitle.textContent = resultTitle;
    if (resultTitle.includes('Победа')) {
      rpsResultTitle.style.color = '#BCEC30';
      rpsResultTitle.style.webkitTextStroke = '1px #000000';
    } else {
      rpsResultTitle.style.color = resultColor;
      rpsResultTitle.style.webkitTextStroke = 'unset';
    }

    rpsStatsText.innerHTML = `Твой ход: <b>${userChoice}</b>.<br>Ход компьютера: <b>${computerChoice}</b>.`;
    
    rpsBox.classList.add('hidden');
    rpsResultBox.classList.remove('hidden');

    // Дублируем в alert по ТЗ
    alert(`Твой выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\nРезультат: ${resultTitle}`);
  });
});

function resetRpsGame() {
  rpsBox.classList.remove('hidden');
  rpsResultBox.classList.add('hidden');
}

restartRpsBtn.addEventListener('click', resetRpsGame);

// Элементы игры Генератор Цветов
const colorWindow = document.getElementById('color-game-window');
const colorPlayground = document.getElementById('color-game-box');
const colorHexCode = document.getElementById('color-hex-code');
const colorInstruction = document.getElementById('color-game-instruction');
const generateColorBtn = document.getElementById('generate-color-btn');
const closeColorBtn = document.getElementById('close-color-btn');

const openColorTriggers = document.querySelectorAll('a[href="#random-color-generator"], .id-color-trigger');

// Открытие игры
openColorTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    colorWindow.classList.remove('hidden');
    resetColorGame();
    
    setTimeout(() => {
      colorWindow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  });
});

// Закрытие игры
closeColorBtn.addEventListener('click', () => {
  colorWindow.classList.add('hidden');
});

// Функция генерации случайного HEX-цвета
function getRandomHexColor() {
  // Обходной синтаксис строк/массивов для обхода бага платформы
  const hexCharacters = Array.from('0123456789ABCDEF');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Изменение цвета всей карточки по клику на кнопку
generateColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  
  // === ИЗМЕНЕНИЕ: Меняем фон ВСЕЙ карточки целиком ===
  colorWindow.style.backgroundColor = newColor;
  
  // Отображаем HEX-код на экране
  colorHexCode.textContent = newColor;

  // Проверка яркости для адаптации текста
  const r = parseInt(newColor.slice(1, 3), 16);
  const g = parseInt(newColor.slice(3, 5), 16);
  const b = parseInt(newColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Находим заголовок H2 в шапке, чтобы он тоже не пропадал
  const quizHeaderTitle = colorWindow.querySelector('.quiz-header h2');
  
  if (brightness < 128) {
    colorHexCode.style.color = '#ffffff';
    colorInstruction.style.color = '#ffffff';
    if (quizHeaderTitle) quizHeaderTitle.style.color = '#ffffff';
  } else {
    colorHexCode.style.color = '#000000';
    colorInstruction.style.color = '#202027';
    if (quizHeaderTitle) quizHeaderTitle.style.color = '#000000';
  }

  alert(`Сгенерирован случайный цвет: ${newColor}`);
});

// Обновленная функция сброса
function resetColorGame() {
  colorWindow.style.backgroundColor = '#ffffff'; // Возвращаем белый фон карточке
  colorHexCode.textContent = '#FFFFFF';
  colorHexCode.style.color = '#000000';
  colorInstruction.style.color = '#202027';
  const quizHeaderTitle = colorWindow.querySelector('.quiz-header h2');
  if (quizHeaderTitle) quizHeaderTitle.style.color = '#000000';
}
