const BACKEND_URL = "http://localhost:3000";
const PLAYERS_URL = `${BACKEND_URL}/api/v1/players`;
const GAMES_URL = `${BACKEND_URL}/api/v1/games`;

document.addEventListener('DOMContentLoaded', () => {
    getPlayers();
//    getGames();
});

function getPlayers() {
    fetch(PLAYERS_URL)
        .then(res => res.json())
        .then(players => {
            players.data.forEach(player => {
                let newPlayer = new Player(player, player.attributes)
                document.querySelector('#player-container').innerHTML += newPlayer.renderPlayerCard()
            })
        })
}

//function getGames() {
//    fetch(GAMES_URL)
//        .then(res => res.json())
//        .then(games => {
//            games.data.forEach(game => {
//                let newGame = new Game(game, game.attributes)
//                document.querySelector('#game-container').innerHTML += newGame.renderGameCard()
//            })
//        })
//}