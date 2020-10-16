class Player {
    constructor(id, name, city, state, username, games) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.state = state;
        this.username = username;

        if (games) {
            this.games = [];
            for (const game of games) {
                const gameName = game["name"];
                this.games.push(gameName)
            }
        }
        Player.allInstances.push(this);
    }
}