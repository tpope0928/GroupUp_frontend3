class Player {
    constructor(player, playerGameAttributes ) {
        this.id = player.id
        this.name = player.name
        this.city = player.city
        this.state = player.state

        this.title = playerGameAttributes.title
        this.genre = playerGameAttributes.genre
        this.skill_level = playerGameAttributes.skill_level
        this.game_name = playerGameAttributes.game_name

        Player.all.push(this)
        console.log(this);
    }

    renderPlayerCard() {
        return `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <h3>${this.name} - ${this.city}, ${this.state}</h3>h3>
            
                </div>
            </div>    
        `
    }
}

Player.all = [];