const BACKEND_URL = "http://localhost:3000";
const PLAYERS_URL = `${BACKEND_URL}/api/v1/players`;
const GAMES_URL = `${BACKEND_URL}/api/v1/games`;

document.addEventListener("DOMContentLoaded", function () {
    Player.allInstances = [];
    Player.fetchPlayers();
    Game.allInstances = [];
    Game.fetchGames();

    let playerButton = document.querySelector("#player_index");
    playerButton.addEventListener("click", Player.showPlayers);

    let gameButton = document.querySelector("#games_index");
    gameButton.addEventListener("click", Game.showGames);

    let createPlayerButton = document.querySelector("#create_player");
    createPlayerButton.addEventListener("click", Player.showPlayerForm);

    let createGameButton = document.querySelector("#create_games");
    createGameButton.addEventListener("click", Game.showGameForm);
})
