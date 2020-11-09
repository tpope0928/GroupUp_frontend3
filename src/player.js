class Player {
    constructor(player, playerAtt) {
        this.id = player.id
        this.name = playerAtt.name
        this.city = playerAtt.city
        this.state = playerAtt.state
        this.games = playerAtt.games


        Player.all.push(this)
        console.log(this);
    }

    renderPlayerCard() {
        return `
            <h3>${this.name} - ${this.city}, ${this.state}</h3>
            <p>${this.games.title}</p>
        `


    }

}

Player.all = [];