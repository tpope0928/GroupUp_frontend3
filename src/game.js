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

    //New Game Form
    static newGameForm(player_id) {
        let body = document.getElementById('container');
        let form =
            `<form id="new-game-form">
             <label>Game Title:</label>
             <input type="text" id="new-game-title" placeholder="Game Title"/>
             <label>Genre:</label>
             <input type="text" id="new-game-genre" placeholder="Genre"/>
             <br>
             <label>Skill Level:</label>
             <input id='new-game-level' type="number" name="level" min="0" max="5">
             <label>Game Name</label>
             <input type="text" id="new-game-name" placeholder="Game Name"/>
             <input type="submit"/>
             </form>
            `
        body.insertAdjacentHTML('beforeend', form)
        Game.postGame(player_id)
    }

    //POST fetch for creating a Game
    static postGame(player_id) {
        let newForm = document.getElementById('new-game-form')
        newForm.addEventListener('submit', function (e){
            e.preventDefault()
            fetch(PLAYERS_URL, {
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
                        game_name: e.target.children[7].value,
                        player_id: player_id
                    }
                })
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error();
                    }
                    return res.json();
                })
                .then(json => {
                    let newGame = new Game(json);
                    console.log(newGame)
                    newGame.appendGame()
                })
                .catch(error => {
                    console.error('Game Class Error', error)
                })
        })
    }

    appendGame() {
        let gc = document.getElementsByClassName('games-container')
        let p = document.createElement('p')
        p.setAttribute('data-id', this.id)
        p.innerHTML = `Title: ${this.title}</br>Genre:${this.genre}</br>Skill Level:${this.skill_level}</br>Game Name:${this.game_name}`

        gc[0].appendChild(p)
    }
}