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
