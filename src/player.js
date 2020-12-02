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
        console.log(this);
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

}

Player.all = [];