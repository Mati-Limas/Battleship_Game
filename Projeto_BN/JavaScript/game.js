const dados = JSON.parse(localStorage.getItem('playerData'));
if (!dados) {
    window.location.href = 'main.html';
}

const config = {
    easy: { lives: 15, gridSize: 5, shipSize: [3, 2, 1, 1] },
    medium: { lives: 12, gridSize: 7, shipSize: [3, 3, 2, 2, 1, 1] },
    hard: { lives: 9, gridSize: 10, shipSize: [3, 3, 2, 2, 2, 1, 1, 1] }
}

const settings = config[dados.difficulty];
let lives = settings.lives;
let shipsSunk = 0;
let points = 0;
const ships = settings.shipSize.reduce((acc, size) => acc + size, 0);
const gridContainer = document.querySelector('#grid');
gridContainer.style.setProperty('--grid-size', settings.gridSize);


/* HUD */

document.getElementById('player-name').textContent = 'player:' + dados.player
document.getElementById('player-lives').textContent = lives + '/' + settings.lives
document.getElementById('player-points').textContent = 'points:' + points
document.getElementById('player-difficulty').textContent = 'difficulty:' + dados.difficulty

/* definição de grid */
const tabuleiro = []
for (let linha = 0; linha < settings.gridSize; linha++) {
    tabuleiro.push([]);
    for (let coluna = 0; coluna < settings.gridSize; coluna++) {
        tabuleiro[linha].push({ hasShip: false, isHit: false });
        const cell = document.createElement('button');
        cell.classList.add('btn-ship');
        cell.dataset.row = linha;
        cell.dataset.col = coluna;
        cell.addEventListener('click', function() {
            reveal(linha, coluna, cell);
        })
        gridContainer.appendChild(cell);
    }
}

alert(`Welcome ${dados.player}\nread the instructions for a better experience.
    \nClick on the squares and try to guess where the enemy ships are.
    \nGreen squares are small ships, yellow are medium and red are the large ones.
    if you click and it only shows a lighter blue it is because you missed`)


/* sorteio de navios */
for (let i = 0; i < settings.shipSize.length; i++) {
    const shipLength = settings.shipSize[i];
    let placed = false;

    while (!placed) {
        const angle = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        let row, col;
        if (angle === 'horizontal') {
            row = Math.floor(Math.random() * settings.gridSize);
            col = Math.floor(Math.random() * (settings.gridSize - shipLength + 1));
        } else {
            row = Math.floor(Math.random() * (settings.gridSize - shipLength + 1));
            col = Math.floor(Math.random() * settings.gridSize);
        }
        
        const PlaceShip = []
        for (let j = 0; j < shipLength; j++) {
            if (angle === 'horizontal') {
                PlaceShip.push([row, col + j]);
            } else {
                PlaceShip.push([row + j, col]);
            }
    }

        const Colision = PlaceShip.some(([row, col]) => tabuleiro[row][col].hasShip);
        
        if (!Colision) {
            PlaceShip.forEach(([row, col]) => {
                tabuleiro[row][col].hasShip = true;
                tabuleiro[row][col].size = shipLength;
            });
            placed = true;
        }

}}

/* função revelar */
function reveal(row, col, cell) {
    const cellData = tabuleiro[row][col];
    if (cellData.isHit) {
        return;
    }
        cellData.isHit = true;
        if (cellData.hasShip) {
            if (cellData.size === 1) {
                cell.classList.add('hit-small');
            }
            else if (cellData.size === 2) {
                cell.classList.add('hit-medium');
            }
            else if (cellData.size === 3) {
                cell.classList.add('hit-large');
            }
            points += 50;
            shipsSunk++;
            if (shipsSunk === ships) {
                alert(`Congratulations ${dados.player}! You have sunk all the ships and scored ${points} points!`);
                window.location.href = 'main.html';
            }
    
    }
        else{
            cell.classList.add('miss');
            lives--;
            if (lives === 0) {
                alert('Game Over! You have no lives left.');
                window.location.href = 'main.html';
            }
        }
}