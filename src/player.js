class Player {
    //Params associated with a Player
    constructor(player, playerAttr) {
        this.id = player.id;
        this.name = playerAttr.name;
        this.city = playerAttr.city;
        this.state = playerAttr.state;
        this.games = playerAttr.games;
    }
}
