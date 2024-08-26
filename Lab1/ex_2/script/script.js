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
      `<br>Name winner is <b>${
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

function rollDiceAnimation(rand) {
  return new Promise((resolve) => {
    let dice = document.querySelector(".dice");
    dice.style.animation = "rolling 4s";
    setTimeout(() => {
      let str = "";
      switch (rand) {
        case 1:
          str = "rotateX(0deg) rotateY(0deg)";
          break;
        case 6:
          str = "rotateX(180deg) rotateY(0deg)";
          break;
        case 2:
          str = "rotateX(-90deg) rotateY(0deg)";
          break;
        case 5:
          str = "rotateX(90deg) rotateY(0deg)";
          break;
        case 3:
          str = "rotateX(0deg) rotateY(90deg)";
          break;
        case 4:
          str = "rotateX(0deg) rotateY(-90deg)";
          break;
      }
      dice.style.transform = str;
      dice.style.animation = "none";
      resolve();
    }, 4050);
  });
}

window.addEventListener("load", (_) => {
  setPlayers();
  loadPlayers();
  loadRound();
});

document.getElementById("rollDice").addEventListener("click", async () => {
  let rollDiceBtn = document.getElementById("rollDice");
  let resetBtn = document.getElementById("reset");

  rollDiceBtn.disabled = true;
  resetBtn.disabled = true;

  let random = getRandomArbitrary(MIN, MAX);
  await rollDiceAnimation(random);

  players[currentPlayer].points += random;
  nextPlayer();
  nextRound();
  loadPlayers();
  loadRound();

  rollDiceBtn.disabled = false;
  resetBtn.disabled = false;

  if (checkEndGame()) {
    rollDiceBtn.classList.add("empty");
    rollDiceBtn.disabled = true;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  setDefault();
  loadPlayers();
  loadRound();
  setWinner("");
  let rollDice = document.getElementById("rollDice");
  rollDice.classList.remove("empty");
  rollDice.disabled = false;
});
