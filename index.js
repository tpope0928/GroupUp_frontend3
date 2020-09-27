document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/api/v1/players'

    fetch(endPoint)
        .then(res => res.json())
        .then(json =>
            json.forEach(player => {
                const markup = `
                <li>
                    <h3>${player.name}</h3>
                </li>`;

                document.querySelector('#player-game-list').innerHTML += markup;
            })
        );
})



