(function main() {
  const animals = [
    "🐝",
    "🐕",
    "🐈",
    "🦆",
    "🐢",
    "🐬",
    "🐑",
    "🐠",
    "🐁",
    "🐄",
    "🐖",
  ];
  const countEl = document.getElementById("count");
  const fieldEl = document.getElementById("field");
  const endEl = document.getElementById("end");
  let count = 0;

  function newAnimal() {
    fieldEl.innerHTML = "";
    const animalEl = document.createElement("button");
    animalEl.classList.add("button", "secondary", "outline");
    animalEl.id = "animal";
    const column = Math.floor(Math.random() * 10) + 1;
    const row = Math.floor(Math.random() * 5) + 1;
    animalEl.dataset.animal =
      animals[Math.floor(Math.random() * animals.length)];
    animalEl.style.gridColumn = column;
    animalEl.style.gridRow = row;

    animalEl.addEventListener("click", () => {
      count++;
      countEl.textContent = count;
      if (count >= 10) {
        endEl.removeAttribute("hidden");
        fieldEl.hidden = true;
      }
      newAnimal();
    });

    fieldEl.appendChild(animalEl);
  }

  newAnimal();

  document.getElementById("again").addEventListener("click", (event) => {
    event.preventDefault();
    count = 0;
    countEl.textContent = count;
    newAnimal();
    fieldEl.removeAttribute("hidden");
    endEl.hidden = true;
  });
})();
