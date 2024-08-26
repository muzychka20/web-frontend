const MIN = 1;
const MAX = 6;

let players = [];
let currentPlayer = 0;
let round = 1;
let finRound = 3;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function nextPlayer() {
  currentPlayer = currentPlayer == players.length - 1 ? 0 : currentPlayer + 1;
}

function nextRound() {
  round += currentPlayer ? 0 : 1;
}

function setDefault() {
  currentPlayer = 0;
  round = 1;
  players = players.map((player) => ({ ...player, points: 0 }));
}

function setWinner(str) {
  document.getElementById("winner").innerHTML = str;
}

function checkEndGame() {
  if (round > finRound) {
    let winnerPoints = Math.max(...players.map((player) => player.points));
    setWinner(
      `Name winner is <b>${
        players.find((p) => p.points == winnerPoints).name
      }</b> with points: <b>${winnerPoints}</b>`
    );
    setDefault();
    return true;
  }
  return false;
}

function loadPlayers() {
  document.getElementById("playersList").innerHTML = "";
  for (let index in players) {
    let item = document.createElement("li");
    item.setAttribute(
      "class",
      `py-3 sm:p-4 ${currentPlayer == index ? "active" : ""}`
    );
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

function loadRound() {
  let currentRound = document.getElementById("currentRound");
  let maxRound = document.getElementById("maxRound");
  currentRound.innerHTML = round > finRound ? finRound : round;
  maxRound.innerHTML = finRound;
}

function setPlayers() {
  let playersAmount = parseInt(prompt("Enter amount of players: "));
  for (let i = 0; i < playersAmount; i++) {
    let playerName = prompt(`Player ${i + 1} name: `);
    players.push({
      name: playerName,
      points: 0,
    });
  }
}

window.addEventListener("load", (_) => {
  setPlayers();
  loadPlayers();
  loadRound();
});

document.getElementById("rollDice").addEventListener("click", () => {
  players[currentPlayer].points += getRandomArbitrary(MIN, MAX);
  nextPlayer();
  nextRound();
  loadPlayers();
  loadRound();
  if (checkEndGame()) {    
    let rollDice = document.getElementById("rollDice");
    rollDice.classList.add("empty")
    rollDice.disabled = true;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  setDefault();
  loadPlayers();
  loadRound();  
  setWinner("");
  let rollDice = document.getElementById("rollDice");
  rollDice.classList.remove("empty")
  rollDice.disabled = false;
});
