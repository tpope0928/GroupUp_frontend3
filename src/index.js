const endPoint = "http://localhost:3000/api/v1/players"

document.addEventListener('DOMContentLoaded', () => {
    getPlayer()
})

function getPlayer() {
    fetch(endPoint)
        .then(response => response.json())
        .then(player => {
            player.data.forEach(player => {
                // double check how your data is nested in the console so you can successfully access the attributes of each individual object
                const playerMarkup = `
                    <div data-id=${player.id}>
                        <h3>${player.attributes.name} - ${player.attributes.city}, ${player.attributes.state}</h3>
                        <p>Game: ${player.attributes.games.title}</p>
                        <p>Genre: ${player.attributes.games.genre}</p>
                        <p>Game Level: ${player.attributes.games.skill_level}</p>
                        <button data-id=${player.id}>Group Up!</button>
                    </div>
                    <br><br>`;

                document.querySelector('#content-container').innerHTML += playerMarkup
            })
        })
}