const POINTS_KEY = "points";
const PLAYED_GAMES_KEY = "games";

function savedDataExists() {
    return localStorage.getItem(POINTS_KEY) && localStorage.getItem(PLAYED_GAMES_KEY);
}

function setFirstGame(points) {
    localStorage.setItem(POINTS_KEY, points);
    localStorage.setItem(PLAYED_GAMES_KEY, "1");
}

function setNextGame(points) {
    localStorage.setItem(POINTS_KEY, parseInt(localStorage.getItem(POINTS_KEY)) + points);
    localStorage.setItem(PLAYED_GAMES_KEY, parseInt(localStorage.getItem(PLAYED_GAMES_KEY)) + 1);
}

function getAverage() {
    return (parseInt(localStorage.getItem(POINTS_KEY)) / parseInt(localStorage.getItem(PLAYED_GAMES_KEY)));
}