const MIN = 1;
const MAX = 6;

let players = [];
let currentPlayer = 0;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function nextPlayer() {
  currentPlayer = currentPlayer == players.length - 1 ? 0 : currentPlayer + 1;
}

let playersAmount = parseInt(prompt("Enter amount of players: "));
for (let i = 0; i < playersAmount; i++) {
  let playerName = prompt(`Player ${i + 1} name: `);
  players.push({
    name: playerName,
    points: 0,
  });
}

function loadPlayers() {
  document.getElementById("playersList").innerHTML = "";
  for (let index in players) {
    let item = document.createElement("li");
    item.setAttribute("class", `py-3 sm:p-4 ${currentPlayer == index ? "active" : ""}`);
    item.innerHTML = `<div class="flex items-center">
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              ${players[index].name}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              ${players[index].points}
          </div>
        </div>`;
    document.getElementById("playersList").appendChild(item);
  }
}

document.getElementById("rollDice").addEventListener("click", () => {
  players[currentPlayer].points += getRandomArbitrary(MIN, MAX);
  nextPlayer();
  loadPlayers();
});
