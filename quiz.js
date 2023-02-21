const quizData = [
    {
        question: "Начнем с философского вопроса: стакан наполовину полон или пуст?",
        a: "Наполовину полон",
        b: "Наполовину пуст",
        correct: "d",
    },
    {
        question: "Каким ты себя ощущаешь: уже поднакопила жизненной мудрости или всегда молода душой?",
        a: "Мудрый",
        b: "Молодой",
        correct: "b",
    },
    {
        question: "По китайскому календарю 2023 год – это год…?",
        a: "Котика",
        b: "Кролика",
        correct: "a",
    },
    {
        question: "У вас есть возможность сходить на концерт, что вы выберете: Stand Up-выступление или концерт музыкальной группы?",
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
    
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;


loadQuiz();


function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answersE1 => answersE1.checked = false);
}


function getSelected() {
    let answer
    answerEls.forEach(answersE1 => {
        if(answersE1.checked){
            answer = answersE1.id
        }
        return answer;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct) {
            score++;
            console.log('no');
        }

        currentQuiz++;
        console.log('no2');


        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})


const strtNone = document.getElementsByClassName('.btn');
const start = document.getElementsByClassName('.start');

strtNone.addEventListener('click', () => {
    start.classList.toggle('startnone');
})