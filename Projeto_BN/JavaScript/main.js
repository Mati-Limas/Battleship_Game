const form = document.querySelector('.formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});


function validateForm() {
    const playerName = document.getElementById('player').value.trim();
    const difficulty = document.getElementById('difficulty').value;
    
    if (playerName === '') {
        alert('Please, enter your name.');
        document.getElementById('player').focus();
        return false;
    }
    const dados = {
        player: playerName, 
        difficulty: difficulty
    
    };
    localStorage.setItem('playerData', JSON.stringify(dados));
    window.location.href = 'game.html';
    return true;
}