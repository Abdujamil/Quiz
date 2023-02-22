/*
    {
        question: "У вас есть возможность сходить на концерт, что вы выберете: Stand Up-выступление или концерт музыкальной группы?",
        a: "Stand Up",
        b: "Концерт музыкальной группы",
        correct: "b",
    },
    {
        question: "Есть время отдохнуть, что будешь делать? Спрячешься дома под пледом или махнешь на природу подальше от всех?",
        a: "Спрятаться дома под пледом",
        b: "На природу",
        correct: "a",
    },

    {
        question: "Какой напиток предпочтешь: чашечку ароматного чая или бодрящий горячий кофе?",
        a: "Чай",
        b: "На природу",
        correct: "a",
    },
    {
        question: "Что обязательно должно быть в хорошем подарке?",
        a: "Главное - это внимание",
        b: "Главное - это польза",
        correct: "a",
    },
 */

const QUESTIONS = [
    {
        question: "Начнем с философского вопроса: стакан наполовину полон или пуст?",
        answers: [
            {
                text: "Наполовину полон",
                points: 1,
            },
            {
                text: "Наполовину пуст",
                points: 2,
            }
        ],
    },
    {
        question: "Каким ты себя ощущаешь: уже поднакопила жизненной мудрости или всегда молода душой?",
        answers: [
            {
                text: "Мудрый",
                points: 1,
            },
            {
                text: "Молодой",
                points: 2,
            }
        ],
    },
    {
        question: "По китайскому календарю 2023 год – это год…?",
        answers: [
            {
                text: "Котика",
                points: 1,
            },
            {
                text: "Кролика",
                points: 2,
            }
        ],
    },
];

const startQuizEl = document.querySelector('.start-quiz-btn');
const sectionStartEl = document.querySelector('#section-start');
const sectionQuestionsEl = document.querySelector('#section-questions');
const answersBlockEl = document.querySelector('.answers');
const questionTitleEl = document.querySelector('.question-title');
const submitEl = document.getElementById('submit');
const currentStepEl = document.getElementById('current-step');
const sectionFinalEl = document.getElementById('section-final');
document.getElementById('questions-count').innerText = QUESTIONS.length;

let currentStep = 0; // текущий шаг в квизе
let points = {}; // результаты ответов

startQuizEl.addEventListener('click', () => {
    sectionStartEl.classList.toggle('d-none');
    sectionQuestionsEl.classList.toggle('d-none');
    renderQuizQuestion();
});

answersBlockEl.addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        submitEl.classList.remove('d-none');
        points[currentStep] = +event.target.value;
    }
});

submitEl.addEventListener('click', () => {
    currentStep++;
    renderQuizQuestion();
});

function renderQuizQuestion() {
    if (currentStep < QUESTIONS.length) {
        submitEl.classList.add('d-none');
        answersBlockEl.innerHTML = '';
        currentStepEl.innerText = currentStep + 1;
        const currentQuestion = QUESTIONS[currentStep];
        questionTitleEl.innerText = currentQuestion.question;
        currentQuestion.answers.forEach((answer, index) => {
            answersBlockEl.innerHTML += `
                <label class="radio-container">
                        ${answer.text}
                        <input type="radio" name="radio" value="${answer.points}">
                        <span class="checkmark"></span>
                </label>
            `;
        });
    } else {
        sectionQuestionsEl.classList.toggle('d-none');
        sectionFinalEl.classList.toggle('d-none');
        const sum = Object.values(points).reduce((partialSum, a) => partialSum + a, 0);
        if (sum > 7 && sum < 10) {
            //video 1
        } else {
            //video 2
        }
        console.log({ points, sum });
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
    }
    renderQuizQuestion();
}

function reloadQuiz() {
    // console.log('reload')
    currentStep = 0;
    points = {};
    sectionFinalEl.classList.toggle('d-none');
    sectionQuestionsEl.classList.remove('d-none');
    renderQuizQuestion();
}

/*
function deselectAnswers() {
    answerEls.forEach(answersE1 => answersE1.checked = false);
}
 
function getSelected() {
    let answer
    answerEls.forEach(answersE1 => {
        if (answersE1.checked) {
            answer = answersE1.id
        }
        return answer;
    })
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            console.log('no');
        }
 
        currentQuiz++;
        console.log('no2');
 
 
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>
 
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
*/




