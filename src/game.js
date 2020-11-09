class Game {
    constructor(game, gameAtt) {
        this.id = game.id
        this.title = gameAtt.title
        this.genre = gameAtt.genre
        this.skill_level = gameAtt.skill_level
        this.game_name = gameAtt.game_name

        Game.all.push(this)
        console.log(this);
    }

    renderGameCard() {
        return `
            <p>${this.title}</p>
            <p>${this.genre}</p>
            <p>${this.skill_level}</p>
            <p>${this.game_name}</p>
        `
    }
}

Game.all = [];