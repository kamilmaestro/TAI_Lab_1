function markCorrect(element) {
    element.classList.add('correct');
}

function markInCorrect(element) {
    element.classList.add('incorrect');
}

function activateAnswers(answers) {
    [...answers].map(answer => answer.addEventListener('click', doAction));
}

function disableAnswers(answers) {
    [...answers].map(answer => answer.removeEventListener('click', doAction));
}

function removeMarkFromAnswer(element) {
    const isCorrect = element.classList[1];
    element.classList.remove(isCorrect);
}