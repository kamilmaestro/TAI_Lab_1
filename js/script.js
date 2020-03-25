const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.list-group-item');
const pointsElem = document.querySelector('.score');
const restart = document.querySelector('.restart');
const currentQuestionIndex = document.querySelector('#question-index');
const average = document.querySelector(".average");
const list = document.querySelector(".list");
const results = document.querySelector(".results");
const userScorePoint = document.querySelector(".userScorePoint");

let index = 0;
let points = 0;
let lastCheckedQuestionIndex = 0;
let currentAnswer = {};
let isCurrentAnswerChecked = false;
const FIRST_QUESTION = 0;

(async() => {
    const preQuestions = await fetchData();
    activateAnswers();
    setQuestion(FIRST_QUESTION);

    function setQuestion(index) {
        question.innerHTML = preQuestions[index].question;
        currentQuestionIndex.innerHTML = index + 1;

        setAnswers(answers, preQuestions, index);
        if (preQuestions[index].answers.length === 2) {
            setStyleDisplayNone([...answers].slice(2));
        } else {
            setStyleDisplayBlock([...answers].slice(2));
        }
    }

    function activateAnswers() {
        [...answers].map(answer => answer.addEventListener('click', doAction));
    }

    function disableAnswers() {
        [...answers].map(answer => answer.removeEventListener('click', doAction));
    }

    next.addEventListener('click', function (event) {
        removeMarkFromAnswers(answers);
        if (isCurrentAnswerChecked || index < lastCheckedQuestionIndex) {
            removeMarkFromAnswer(currentAnswer);
            index++;
            if (index < preQuestions.length) {
                setQuestion(index);
                index < lastCheckedQuestionIndex ?
                    disableAnswers() :
                    activateAnswers();
            } else {
                finishQuiz();
            }
            isCurrentAnswerChecked = false;
        }
    });

    previous.addEventListener('click', function (event) {
        if (index > FIRST_QUESTION) {
            index--;
            setQuestion(index);
            removeMarkFromAnswer(currentAnswer);
            disableAnswers();
            isCurrentAnswerChecked = true;
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
        isCurrentAnswerChecked = true;
        lastCheckedQuestionIndex++;
        disableAnswers();
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
        activateAnswers();
        list.style.display = 'block';
        results.style.display = 'none';
    });
})();
