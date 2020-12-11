const BACKEND_URL = "http://localhost:3000";
const PLAYERS_URL = `${BACKEND_URL}/api/v1/players`;
const GAMES_URL = `${BACKEND_URL}/api/v1/games`;

//document.addEventListener('DOMContentLoaded', () => {
    //getPlayers();
//    getGames();
//});

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

function getGames() {
    fetch(GAMES_URL)
        .then(res => res.json())
        .then(games => {
            games.data.forEach(game => {
                let newGame = new Game(game, game.attributes)
                document.querySelector('#game-container').innerHTML +=
                    newGame.renderGameCard()
            })
        })
}

function postFetch(name, city, state, game_id) {
    // build my body object outside of my fetch
    const bodyData = {name, city, state, game_id}

    fetch(PLAYERS_URL, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
        .then(response => response.json())
        .then(player => {
            console.log(player);
            const playerData = player.data
            // render JSON response
            let newPlayer = new Player(playerData, playerData.attributes)
            document.querySelector('#player-container').innerHTML +=
                newPlayer.renderPlayerCard();
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