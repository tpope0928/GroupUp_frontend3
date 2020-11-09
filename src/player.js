class Player {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.city = data.city;
        this.state = data.state;
        Player.all.push(this);
    }

    renderPlayerItem() {
        return `
        <h3>${this.name} - ${this.city}, ${this.state}</h3>
        `;
    }
}

Player.all = [];