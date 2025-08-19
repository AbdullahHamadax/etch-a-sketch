const drawingCanvas = document.querySelector(".drawing-canvas");
const clearBtn = document.querySelector(".clear");
const penBtn = document.querySelector(".pen");
const eraserBtn = document.querySelector(".eraser");
const changeGridSizeBtn = document.querySelector(".change-grid");
const rainbowModeBtn = document.querySelector(".rainbow");
let isRainbowModeOn = false;
let toolUsed;

penBtn.addEventListener("click", () => {
  if (toolUsed === "pen") {
    toolUsed = null;
    penBtn.classList.remove("active");
  } else {
    toolUsed = "pen";
    penBtn.classList.add("active");
    eraserBtn.classList.remove("active");
  }
});

eraserBtn.addEventListener("click", () => {
  if (toolUsed === "eraser") {
    toolUsed = null;
    eraserBtn.classList.remove("active");
  } else {
    toolUsed = "eraser";
    eraserBtn.classList.add("active");
    penBtn.classList.remove("active");
  }
});

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
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(gridSize) {
  drawingCanvas.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = `calc(100%/${gridSize})`;
      square.style.height = `calc(100%/${gridSize})`;
      drawingCanvas.append(square);
    }
  }
}

// Some event delegations

clearBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((sq) => (sq.style.backgroundColor = "white"));
  toolUsed = "nothing";
  penBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

drawingCanvas.addEventListener("mouseover", (e) => {
  if (e.buttons === 1 && e.target.classList.contains("square")) {
    if (toolUsed === "pen") {
      e.target.style.backgroundColor = isRainbowModeOn
        ? getRandomColor()
        : "black";
    } else if (toolUsed === "eraser") {
      e.target.style.backgroundColor = "white";
    }
  }
});

createGrid(16);
