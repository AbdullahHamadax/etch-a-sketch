const drawingCanvas = document.querySelector(".drawing-canvas");
const clearBtn = document.querySelector(".clear");
const penBtn = document.querySelector(".pen");
const eraserBtn = document.querySelector(".eraser");
const changeGridSizeBtn = document.querySelector(".change-grid");
const rainbowModeBtn = document.querySelector(".rainbow");
let isRainbowModeOn = false;
let toolUsed;

penBtn.addEventListener("click", () => (toolUsed = "pen"));
eraserBtn.addEventListener("click", () => (toolUsed = "eraser"));

rainbowModeBtn.addEventListener("click", () => {
  isRainbowModeOn = !isRainbowModeOn;
  rainbowModeBtn.classList.toggle("active");
});

changeGridSizeBtn.addEventListener("click", () => {
  drawingCanvas.innerHTML = "";
  let gridSize = prompt("Enter your grid size ( Max 100 )");

  if (gridSize <= 0 || gridSize >= 101) {
    alert("You can only choose between 1-100");
    createGrid(16);
    return;
  }
  createGrid(gridSize);
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = `calc(100%/${gridSize}`;
      square.style.height = `calc(100%/${gridSize}`;
      drawingCanvas.append(square);

      square.addEventListener("mouseenter", () => {
        if (toolUsed === "pen") {
          square.style.backgroundColor = isRainbowModeOn
            ? getRandomColor()
            : "black";

          square.style.cursor = "pointer";
        } else if (toolUsed === "eraser") {
          square.style.backgroundColor = "white";
        }
      });

      clearBtn.addEventListener("click", () => {
        square.style.backgroundColor = "white";
        toolUsed = "nothing";
      });
    }
  }
}

createGrid(16);
