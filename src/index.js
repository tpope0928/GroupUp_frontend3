const BACKEND_URL = "http://localhost:3000";
const PLAYERS_URL = `${BACKEND_URL}/api/v1/players`;
const GAMES_URL = `${BACKEND_URL}/api/v1/games`;

document.addEventListener('DOMContentLoaded', () => {
    fetch(PLAYERS_URL)
        .then(res => res.json())
        .then(json => console.log(json))
});