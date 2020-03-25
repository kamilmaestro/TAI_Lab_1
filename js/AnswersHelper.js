function setAnswers(answers, preQuestions, questionIndex) {
    [...answers].map((answer, idx) => answer.innerHTML = preQuestions[questionIndex].answers[idx]);
}

function markCorrect(element) {
    element.classList.add('correct');
}

function markInCorrect(element) {
    element.classList.add('incorrect');
}

function removeMarkFromAnswer(element) {
    const isCorrect = element.classList[1];
    element.classList.remove(isCorrect);
}

function setStyleDisplayNone(answers) {
    setStyleDisplayAs('none', answers);
}

function setStyleDisplayBlock(answers) {
    setStyleDisplayAs('block', answers);
}

function setStyleDisplayAs(style, answers) {
    answers.map(answer => answer.style.display = style);
}