const BACKEND_URL = "http://localhost:3000";
const PLAYERS_URL = `${BACKEND_URL}/api/v1/players`;
const GAMES_URL = `${BACKEND_URL}/api/v1/games`;

document.addEventListener('DOMContentLoaded', () => {
    getPlayers();
});

function getPlayers() {
    fetch(PLAYERS_URL)
        .then(res => res.json())
        .then(players => {
            players.data.forEach(player => {
                const playerMarkup = `
                <h3>${player.attributes.name} - ${player.attributes.city}, ${player.attributes.state}</h3>
                `;

                document.querySelector('#content-container').innerHTML += playerMarkup
            })
        })
}
