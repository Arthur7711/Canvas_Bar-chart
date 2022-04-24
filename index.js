const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function draw() {
  let n = document.getElementById("num").value,
    graphValue = n.split(","),
    X = 50,
    width = 40;

  ctx.fillStyle = "blue";

  for (let i = 0; i < graphValue.length; i++) {
    let height = graphValue[i];
    ctx.fillRect(X, canvas.height - height, width, height);
    X += width + 15;
  }
  document.getElementById("num").value = "";
}

function reset() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

submit.addEventListener("click", () => {
  draw();
});

clear.addEventListener("click", () => {
  reset();
});
