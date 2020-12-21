document.addEventListener('DOMContentLoaded', () => {
    Game.createGame();
})

class Game {
    constructor(game, gameAtt) {
        this.id = game.id
        this.title = gameAtt.title
        this.genre = gameAtt.genre
        this.skill_level = gameAtt.skill_level
        this.game_name = gameAtt.game_name
        this.players = gameAtt.players

        Game.all.push(this)
        //console.log(this);
    }

    static createGame(game) {
        let newGameForm = document.getElementById('new-game-form')
        newGameForm.addEventListener('submit', function (e){
            e.preventDefault();
            fetch(GAMES_URL, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({
                    game: {
                        title: e.target.children[1].value,
                        genre: e.target.children[3].value,
                        skill_level: e.target.children[5].value,
                        game_name: e.target.children[7].value
                    }
                })
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error();
                    }
                    return res.json();
                })
                .then (game => {
                    let newGame = new Game(game)
                    newGame.displayGame();
                })
                .catch(error => {
                    console.error('Game class Error' , error)
                })
        })
    }

    renderGameCard() {
        const playerData = this.players.map(player =>
            `<p>${player.city}, ${player.state}</p>`)

        return `
            <div data-id="${this.id}">
                <h2>${this.title}</h2>
                <p>${this.game_name}</p>
                ${playerData}
                <p>${this.skill_level}</p>
            </div>
        `
        }
}

Game.all = [];