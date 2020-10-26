class Player {
    constructor(player) {
        this.id = player.id;
        this.name = player.attributes.name;
        this.city = player.attributes.city;
        this.state = player.attributes.state;
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