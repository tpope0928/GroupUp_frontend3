
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
        //debugger
        return `
            <div data-id="${this.id}">
                <h2>${this.name} - ${this.city}, ${this.state}</h2>
                <h4>${this.games.title}</h4>
                <p>${this.games.genre}</p>
                <p>${this.games.skill_level}</p>
                <p>${this.games.game_name}</p>
            </div>
        `


    }

}

Player.all = [];