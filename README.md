Battleship

Single-player Battleship game built with plain HTML, CSS and JavaScript, featuring difficulty levels, a live HUD (lives/score) and leaderboard saved with LocalStorage.

How to play
  1. Clone/download the repository.
  2. Open main.html in your browser (no server or build step required).
  3. Enter your name and pick a difficulty.
  4. Click the grid cells to try to hit the enemy ships.

3 Difficulty Levels </br>  
  Each level has a different board size, lives and ship set:

| Difficulty | Lives | Board | 3-cell | 2-cell | 1-cell |
|------------|------:|-------|-------:|-------:|-------:|
| Easy       | 15    | 5x5   | 1      | 1      | 2      |
| Medium     | 12    | 7x7   | 2      | 2      | 2      |
| Hard       | 9     | 10x10 | 2      | 3      | 3      |

- Random ship placement (horizontal and vertical)
- HUD showing your name, the chosen difficulty, lives, and score
- Local leaderboard (top 10, sorted by score) persisted via `localStorage`
- Game ends on win (all ships sunk) or loss (no lives left), auto-redirecting to the leaderboard

## Project Structure

```text
├── main.html              # Start screen
├── game.html              # Game board
├── leaderboard.html       # Player ranking
├── CSS/
│   └── style.css
└── JavaScript/
    ├── main.js            # Form validation
    ├── game.js            # Core game logic
    └── leaderboard.js     # Ranking rendering
```
## Tech Stack
```text
- HTML5
- CSS3
- JavaScript (vanilla)
- localStorage for cross-page data persistence (no backend)
```
