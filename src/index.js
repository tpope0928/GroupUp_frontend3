const BACKEND_URL = "http://localhost:3000";
const PLAYERS_URL = `${BACKEND_URL}/api/v1/players`;
const GAMES_URL = `${BACKEND_URL}/api/v1/games`;

document.addEventListener('DOMContentLoaded', () => {
    getPlayers();
//    getGames();
});


function getPlayers() {
    var x = document.getElementById("player-container");
    fetch(PLAYERS_URL)
        .then(res => res.json())
        .then(players => {
            players.data.forEach(player => {
                let newPlayer = new Player(player, player.attributes) // {id: player.id, ...player.attributes}
                document.querySelector('#player-container').innerHTML +=
                    newPlayer.renderPlayerCard();

                //debugger
            })
        })
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}


function playerFormDisplay() {
    let pf = document.getElementById("player-form");
    if (pf.style.display === "none") {
        pf.style.display = "block";
    } else {
        pf.style.display = "none"
    }
}

function gameFormDisplay() {
    let gf = document.getElementById("new-game-form");
    if (gf.style.display === "hidden") {
        gf.style.display = "none";
    } else {
        gf.style.display = "none"
    }
}

