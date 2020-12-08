class Game {
    constructor(game, gameAtt) {
        this.id = game.id
        this.title = gameAtt.title
        this.genre = gameAtt.genre
        this.skill_level = gameAtt.skill_level
        this.game_name = gameAtt.game_name
        this.players = gameAtt.players

        Game.all.push(this)
        console.log(this);
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