const leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
if (!leaderboard) {
    alert(`No matches played yet`);
    window.location.href = 'main.html';
}
else{

const t_lb = document.getElementById('lb-container');

leaderboard.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${result.name}</td>
    <td>${result.points}</td>
    <td>${result.difficulty}</td>`;
    t_lb.appendChild(row);
})}


const button = document.querySelector('.btn-return');

button.addEventListener('click', function() {
    window.location.href = 'main.html'
})
