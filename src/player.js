class Player {
    constructor(id, name, city, state, games) {
        super(id, name);
        this.city = city;
        this.state = state;

        if (games) {
            this.games = [];
            for (const game of games) {
                const gameName = game["name"];
                this.games.push(gameName);
            }
        }

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