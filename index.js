document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    const endPoint = 'http://localhost:3000/api/v1/players'

    fetch(endPoint)
        .then(res => res.json())
        .then(json => console.log(json));
});

