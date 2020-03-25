let next = document.querySelector('.next');
let previous = document.querySelector('.previous');

let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');

let pointsElem = document.querySelector('.score');
let restart = document.querySelector('.restart');
let index = 0;
let points = 0;
const FIRST_QUESTION = 0;

let currentQuestionIndex = document.querySelector('#question-index');
let average = document.querySelector(".average");
let list = document.querySelector(".list");
let results = document.querySelector(".results");
let userScorePoint = document.querySelector(".userScorePoint");
let currentAnswer;

activateAnswers(answers);

function setQuestion(index) {
    question.innerHTML = preQuestions[index].question;
    currentQuestionIndex.innerHTML = index + 1;

    answers[0].innerHTML = preQuestions[index].answers[0];
    answers[1].innerHTML = preQuestions[index].answers[1];
    answers[2].innerHTML = preQuestions[index].answers[2];
    answers[3].innerHTML = preQuestions[index].answers[3];
    if (preQuestions[index].answers.length === 2) {
        answers[2].style.display = 'none';
        answers[3].style.display = 'none';
    } else {
        answers[2].style.display = 'block';
        answers[3].style.display = 'block';

    }
}

setQuestion(FIRST_QUESTION);

next.addEventListener('click', function (event) {
    removeMarkFromAnswer(currentAnswer);
    index++;
    if (index < preQuestions.length) {
        setQuestion(index);
        activateAnswers(answers);
    } else {
        finishQuiz();
    }
});


previous.addEventListener('click', function (event) {
    if (index > FIRST_QUESTION) {
        index--;
        setQuestion(index);
    }
});

function doAction(event) {
    if (event.target.innerHTML === preQuestions[index].correct_answer) {
        points++;
        pointsElem.innerText = points;
        markCorrect(event.target);
    }
    else {
        markInCorrect(event.target);
    }
    currentAnswer = event.target;
    disableAnswers(answers);
}

function saveDataToLocalStorage() {
    savedDataExists() ?
        setNextGame(points) :
        setFirstGame(points);
}

function finishQuiz() {
    saveDataToLocalStorage();
    results.style.display = "block";
    list.style.display = "none";
    average.innerHTML = getAverage();
    userScorePoint.innerHTML = points;
}

restart.addEventListener('click', function (event) {
    event.preventDefault();

    index = 0;
    points = 0;
    let userScorePoint = document.querySelector('.score');
    userScorePoint.innerHTML = points;
    setQuestion(index);
    activateAnswers(answers);
    list.style.display = 'block';
    results.style.display = 'none';
});
