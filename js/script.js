console.log("JS OK");

//# PRELIMINARI
//* Recupero gli elementi dal DOM
const playBtn = document.getElementById("play-button");
const gridElement = document.getElementById("grid");
//? Funzioni
/* Funzione che crea una singola cella */
const createCell = (number) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = number;
  return cell;
};

//* Attendo il click del bottone
playBtn.addEventListener(
  "click",
  () => {
    //* Ciclo per inserire tutte e 100 le celle
    for (let i = 1; i <= 100; i++) {
      const cells = createCell(i);
      cells.addEventListener("click", () => {
        cells.classList.toggle("clicked");
        console.log(i);
      });
      grid.appendChild(cells);
    }
  },

  // Consente di cliccare solo una volta e quindi di far apparire solo una griglia.
  { once: true }
);
