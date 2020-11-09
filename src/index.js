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
                const playerMarkup = `
                <h3>${player.attributes.name} - ${player.attributes.city}, ${player.attributes.state}</h3>
                <p>${player.attributes.games.title}</p>
                `;

                document.querySelector('#player-container').innerHTML += playerMarkup
            })
        })
}

//function getGames() {
//    fetch(GAMES_URL)
//        .then(res => res.json())
//        .then(games => {
//            games.data.forEach(game => {
//                const gameMarkup = `
//                <p>${game.attributes.title}
//                `;
//
//                document.querySelector('#game-container').innerHTML += gameMarkup
//            })
//        })
// }