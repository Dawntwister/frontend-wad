const questions = [
    {
        question: "Question 1: What is 2 + 2?",
        answers: {
            A: "3",
            B: "4",
            C: "5"
        },
        correctAnswer: "B"
    },
    {
        question: "Question 2: What is 6 * 7?",
        answers: {
            A: "42",
            B: "56",
            C: "48"
        },
        correctAnswer: "A"
    },
    {
        question: "Question 3: What is the capital of France?",
        answers: {
            A: "Berlin",
            B: "Rome",
            C: "Paris"
        },
        correctAnswer: "C"
    }
];

new Vue({
    el: '#quiz',
    data: {
        questions: questions,
        currentQuestionIndex: 0,
        selectedAnswer: null,
        score: 0
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex];
        }
    },
    methods: {
        nextQuestion() {
            if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
                this.score++;
            }
            this.selectedAnswer = null;
            this.currentQuestionIndex++;
        },
        endQuiz() {
            this.currentQuestionIndex = this.questions.length;
        }
    }
});

// Functions not directly related to Vue logic can stay outside the Vue instance
const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerForm = document.getElementById("answer-form");
const choices = Array.from(document.querySelectorAll("input[name=choice]"));
const nextButton = document.getElementById("next");
const endButton = document.getElementById("end");
const scoreElement = document.getElementById("score");
const scoreValue = document.getElementById("score-value");

function showQuestion() {
    questionElement.textContent = quiz.currentQuestion.question;
    choices.forEach((choice, index) => {
        choice.value = Object.keys(quiz.currentQuestion.answers)[index];
        choice.nextElementSibling.textContent = `${choice.value}) ${quiz.currentQuestion.answers[choice.value]}`;
    });
}

function checkAnswer() {
    const selectedChoice = choices.find((choice) => choice.checked);
    if (selectedChoice.value === quiz.currentQuestion.correctAnswer) {
        quiz.score++;
    }
    quiz.currentQuestionIndex++;
    if (quiz.currentQuestionIndex < quiz.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    scoreElement.style.display = "block";
    scoreValue.textContent = score;
    endButton.style.display = "none";
}

function handleNextButtonClick() {
    if (currentQuestion < questions.length - 1) {
        checkAnswer();
        answerForm.reset();
        showQuestion(); // Add this line to display the next question
    } else if (currentQuestion === questions.length - 1) {
        checkAnswer();
        nextButton.style.display = "none";
        endButton.style.display = "block";
    }
}

showQuestion();

nextButton.addEventListener("click", handleNextButtonClick);
endButton.addEventListener("click", showResult);
