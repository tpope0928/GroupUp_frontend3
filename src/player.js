document.addEventListener('DOMContentLoaded', () => {
    Player.createPlayer();
})

//Params associated wih a Player
class Player {
    constructor(player, playerAtt) {
        this.id = player.id
        //debugger
        this.name = playerAtt.name
        this.city = playerAtt.city
        this.state = playerAtt.state
        this.games = playerAtt.games

        //this.title = playerAtt.games.title


        Player.all.push(this)
        //console.log(this);
    }
//POST fetch for creating a Player
    static createPlayer(player) {
        let newPlayerForm = document.getElementById('new-player-form')
        newPlayerForm.addEventListener('submit', function (e){
            e.preventDefault();
            fetch(PLAYERS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({
                    player: {
                        name: e.target.children[1].value,
                        city: e.target.children[3].value,
                        state: e.target.children[5].value
                    }
                })
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error();
                    }
                    return res.json();
                })
                .then (player => {
                    let newPlayer = new Player(player)
                    console.log(player)
                    newPlayer.displayPlayer();
                })
                .catch(error => {
                    console.error('Player class Error' , error)
                })
        })
    }

    renderPlayerCard() {
        const gameData = this.games.map(game =>
            `   <h4>${game.title}</h4>
                <p>${game.genre}</p>
                <p>${game.skill_level}</p>
                <p>${game.game_name}</p>`)
        return `
            <div data-id="${this.id}">
                <h2>${this.name} - ${this.city}, ${this.state}</h2>
                ${gameData}
            </div>
        `


    }

    // displayPlayer() {
    //     let body = document.getElementById('player-container');
    //     body.innerHTML = ''
    //     let div = document.createElement('div');
    //     div.setAttribute('class', 'player-request');
    //     let gc = document.getElementById('game-container'
    //     gc.classList.remove('hidden')
    //     let Request = document.createElement('p');
    //     Request.innerHTML = '<h1>Add Game Info</h1>'
    //     div.appendChild(Request);
    //     body.appendChild(div);
    //
    // }

}

Player.all = [];