document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/api/v1/players'

    fetch(endPoint)
        .then(res => res.json())
        .then(json =>
            json.data.forEach(player => {
                const markup = `
                    <h3>${player.name} - ${player.city}, ${player.state}</h3>
                    <p>Game: ${player.attributes.game.title}</p>
                `;

                document.querySelector('#player-game-list').innerHTML += markup;
            })
        );
})



