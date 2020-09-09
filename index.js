document.addEventListener('DOMContentLoaded', ()=> {
    Player.createPlayer();
})

class Player {
    constructor(player) {
        this.id = player.id;
        this.name = player.name;
        this.city = player.city;
        this.state = player.state;
        this.games = player.games
    }
    constructor(game) {
        this.id = game.id;
        this.title = game.title;
        this.genre = game.genre;
        this.skill_level = game.skill_level;
        this.game_username = game.game_username
    }
}