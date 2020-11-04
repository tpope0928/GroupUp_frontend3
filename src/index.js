const BACKEND_URL = "http://localhost:3000";
const PLAYERS_URL = `${BACKEND_URL}/api/v1/players`;
const GAMES_URL = `${BACKEND_URL}/api/v1/games`;

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");
    getPlayerData()

})

function getPlayerData() {
    fetch(BACKEND_URL)
    .then(response => response.json())
    .then(players => {
            players.data.forEach(player => {
                let newPlayer = new Player(player, player.attributes)

                document.querySelector('#content-container').innerHTML += newPlayer.renderPlayerCard()

            })
    })

}