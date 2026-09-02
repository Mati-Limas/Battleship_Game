const dados = JSON.parse(localStorage.getItem('playerData'));
if (!dados) {
    window.location.href = 'main.html';
}

const config = {
    easy: { lives: 7, gridSize: 5 },
    medium: { lives: 5, gridSize: 7 },
    hard: { lives: 3, gridSize: 10 }
}

const settings = config[dados.difficulty];


const tabuleiro = []
for (let linha = 0; linha < settings.gridSize; linha++) {
    tabuleiro.push([]);
    for (let coluna = 0; coluna < settings.gridSize; coluna++) {
        tabuleiro[linha].push({ hasShip: false, isHit: false });
    }
}