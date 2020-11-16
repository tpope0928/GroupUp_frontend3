
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

        return `
            <div data-id="${this.id}">
                <h2>${this.name} - ${this.city}, ${this.state}</h2>
                <h4>${this.games[0].title}</h4>
                <p>${this.games[0].genre}</p>
                <p>${this.games[0].skill_level}</p>
                <p>${this.games[0].game_name}</p>
            </div>
        `


    }

}

Player.all = [];