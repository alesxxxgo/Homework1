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
