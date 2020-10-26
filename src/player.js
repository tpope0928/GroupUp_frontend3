class Player {
    constructor(player) {
        this.id = player.id;
        this.name = player.name;
        this.city = player.city;
        this.state = player.state;
        Player.all.push(this);
        console.log(this);
    }

    renderListItem() {
        return `
        <h3>${this.name} - ${this.city}, ${this.state}
        </h3>`
    }
}


Player.all = [];