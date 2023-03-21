function play() {
  input = document.getElementById("players").value;
  winner_id = 0;
  winner_dice = 0;
  html = ``;
  for (i = 0; i < input; i++) {
    var randomNumber = Math.floor(Math.random() * 6) + 1; //1-6
    html += dice(i + 1, randomNumber);
    if (randomNumber > winner_dice) {
      winner_dice = randomNumber;
      winner_id = i + 1;
    }
  }
  app.innerHTML = html;
  document.querySelector("h1").innerHTML = `🚩 Player ${winner_id} Wins! 🚩`;
  document.querySelector("button").innerHTML = "Repeat";
}

function dice(id, dice = 6) {
  return `
    <div id="player${id}" class="dice">
      <p>Player ${id}</p>
      <img class="img1" src="images/dice${dice}.png" />
    </div>
  `;
}

function setup() {
  input = document.getElementById("players").value;
  html = ``;
  for (i = 0; i < input; i++) {
    html += dice(i + 1);
  }
  app.innerHTML = html;
}

function keydown() {
  if (key) {
    key = false;
    play();
  }
}
function keyup() {
  key = true;
}

key = true;
app = document.getElementById("app");
setup();
