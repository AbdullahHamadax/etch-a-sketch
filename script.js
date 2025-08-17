const drawingCanvas = document.querySelector(".drawing-canvas");
const penBtn = document.querySelector(".pen");
const eraserBtn = document.querySelector(".eraser");
for (let i = 0; i < 32; i++) {
  for (let j = 0; j < 32; j++) {
    const square = document.createElement("div");
    square.className = "square";
    drawingCanvas.append(square);

    penBtn.addEventListener("click", () => {
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
      });
    });

    eraserBtn.addEventListener("click", () => {
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "white";
      });
    });
  }
}
