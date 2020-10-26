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
                    <div data-id=${player.id}>
                        <h3>${player.attributes.name} - ${player.attributes.city}, ${player.attributes.state}</h3>
                        <p>Game: ${player.attributes.games.title}</p>
                        <p>Genre: ${player.attributes.games.genre}</p>
                        <p>Game Level: ${player.attributes.games.skill_level}</p>
                        <button data-id=${player.id}>Group Up!</button>
                    </div>
                <br><br>`;

                document.querySelector('#content-container').innerHTML += playerMarkup
            })
        })
}
