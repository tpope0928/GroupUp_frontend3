document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/api/v1/players'

    fetch(endPoint)
        .then(res => res.json())
        .then(json =>
            json.forEach(player => {
                const playerMarkup = `
                <h3>${player.name} - ${player.city}, ${player.state}
                </h3>`;

                document.querySelector('#player-game-list').innerHTML += playerMarkup;
            })
        );
});


