var total = 0;

function makeBalloon() {
  var balloon = document.createElement("div");
  balloon.setAttribute("class", "balloon");

  var x = Math.floor(Math.random() * 600);
  var y = Math.floor(Math.random() * 400);

  balloon.setAttribute("style", "left: " + x + "px; top: " + y + "px;");
  balloon.setAttribute("onclick", "toBurst(this)");

  document.body.appendChild(balloon);
}

function toBurst(balloon) {
  document.body.removeChild(balloon);

  total++;
  var score = document.getElementById('total');
  score.innerHTML = "Balões estourados: " + total;
}

function loadingGame() {
  setInterval(makeBalloon, 1000);
}